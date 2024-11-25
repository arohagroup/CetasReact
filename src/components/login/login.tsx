import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import CryptoJS from 'crypto-js';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { environment } from '../../core/services/environment';  // Assuming the API_KEY and API_CIPHER are in this file
import { useLoginService } from '../API/loginService';  // Create a service to handle login requests
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [showSecurityTokenInput, setShowSecurityTokenInput] = useState(false);
  const [secreteKey, setSecreteKey] = useState('');
  const [secreteKeyQRUrl, setSecreteKeyQRUrl] = useState('');
  const [isError, setIsError] = useState(false);
  const [isTokenError, setIsTokenError] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const {
    setSecurityTokenInput,
    getTwoFactorAuthStatus,
    login,
    getProfile,
    logout,
    refreshAuthToken,
    getAllUsers,
    getSecreteKey,
    getLoggedInUserDetails,
    getSSOloginInfo,
    getSSDemoDetails,
    markNotificationAsRead} = useLoginService()

  const API_KEY = environment.API_KEY;
  const API_CIPHER = environment.API_CIPHER;

  useEffect(() => {
    // Check 2FA status on component mount
    getTwoFactorAuthStatus().then((res: any) => {
      if (res.status) {
        setShowSecurityTokenInput(true);
      }
    });
  }, [username]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!token && showSecurityTokenInput) {
      setIsTokenError(true);
      return;
    }

    try {
      const loginResponse = await login({ username, password, token });
      console.log(loginResponse)
      const { access_token, refresh_token } = loginResponse;
      console.log(access_token, refresh_token)

      // Store tokens in localStorage
      localStorage.setItem('accessToken', access_token);
      localStorage.setItem('refreshToken', refresh_token);
      localStorage.setItem('username', username);

      // Get user profile
      const profileResponse = await getProfile();
      const decryptedLicenseName = CryptoJS.AES.decrypt(profileResponse[0].licenseName, API_KEY, API_CIPHER).toString(CryptoJS.enc.Utf8);

      console.log(decryptedLicenseName)
      localStorage.setItem('profile', decryptedLicenseName);
      localStorage.setItem('activeDashboard', decryptedLicenseName.substring(0, 3));

      // Navigate based on permissions
      const userDetails = await getLoggedInUserDetails();

      console.log(userDetails)
      localStorage.setItem('userRoles', JSON.stringify(userDetails.distinctRoles[0]));
      localStorage.setItem('userPermissions', JSON.stringify(userDetails.distinctPermissions));

      const isActiveURL = localStorage.getItem('ActiveURL');
      const redirectURL = localStorage.getItem('redirectURL');
      const permissions = userDetails.distinctPermissions;

      if (isActiveURL && isActiveURL !== '/SOCDashboard') {
        navigate(isActiveURL);
      } else if (redirectURL && permissions.includes('Dashboard_Control')) {
        navigate(redirectURL);
      } else {
        // Default redirect if permissions are valid
        if (permissions.includes('Dashboard_Control')) {
          navigate('/SOCDashboard');
        } else {
          setIsError(true);
        }
      }
    } catch (error) {
      setIsError(true);
      if (showSecurityTokenInput) {
        openSecreteKeyPopup();
      }
    }
  };

  const openSecreteKeyPopup = () => {
    getSecreteKey(username).then((res: any) => {
      if (res) {
        setSecreteKey(res.SecreteKey);
        setSecreteKeyQRUrl(res.SecreteKeyQRURL);
        setOpenDialog(true);
      }
    });
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <TextField
          label="Username"
          value={username}
          onChange={(e: any) => setUsername(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        {showSecurityTokenInput && (
          <TextField
            label="Security Token"
            value={token}
            onChange={(e: any) => setToken(e.target.value)}
            fullWidth
            margin="normal"
            error={isTokenError}
            helperText={isTokenError && 'Please provide a valid token.'}
          />
        )}
        {isError && <div className="error-message">Login failed. Please try again.</div>}
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Secret Key</DialogTitle>
        <DialogContent>
          <div>
            <p>Secret Key: {secreteKey}</p>
            <img src={secreteKeyQRUrl} alt="QR Code" />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Login;
