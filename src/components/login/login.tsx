import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { environment } from '../../core/services/environment';
import { useLoginService } from '../API/loginService';
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
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    getTwoFactorAuthStatus,
    login,
    getProfile,
    getSecreteKey,
    getLoggedInUserDetails,
  } = useLoginService();

  const API_KEY = environment.API_KEY;
  const API_CIPHER = environment.API_CIPHER;

  // Check 2FA status on mount
  useEffect(() => {
    getTwoFactorAuthStatus().then((res: any) => {
      if (res.status) {
        setShowSecurityTokenInput(true);
      }
    });
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!token && showSecurityTokenInput) {
      setIsTokenError(true);
      return;
    }

    setIsLoading(true); // Set loading state during login

    try {
      const loginResponse = await login({ username, password, token });
      const { access_token, refresh_token } = loginResponse;

      // Store tokens
      localStorage.setItem('accessToken', access_token);
      localStorage.setItem('refreshToken', refresh_token);
      localStorage.setItem('username', username);

      // Fetch and store profile details
      const profileResponse = await getProfile();
      const decryptedLicenseName = CryptoJS.AES.decrypt(
        profileResponse[0].licenseName,
        API_KEY,
        API_CIPHER
      ).toString(CryptoJS.enc.Utf8);

      localStorage.setItem('profile', decryptedLicenseName);
      localStorage.setItem('activeDashboard', decryptedLicenseName.substring(0, 3));

      // Fetch user roles and permissions
      const userDetails = await getLoggedInUserDetails();
      const permissions = userDetails.distinctPermissions;

      localStorage.setItem('userRoles', JSON.stringify(userDetails.distinctRoles[0]));
      localStorage.setItem('userPermissions', JSON.stringify(permissions));

      // Navigate to the dashboard
      navigate('/dashboard', { replace: true }); // Ensures no back navigation to login
    } catch (error) {
      setIsError(true);
      if (showSecurityTokenInput) {
        openSecreteKeyPopup();
      }
    } finally {
      setIsLoading(false); // Reset loading state
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        {showSecurityTokenInput && (
          <TextField
            label="Security Token"
            value={token}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setToken(e.target.value)}
            fullWidth
            margin="normal"
            error={isTokenError}
            helperText={isTokenError && 'Please provide a valid token.'}
          />
        )}
        {isError && <div className="error-message">Login failed. Please try again.</div>}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
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
