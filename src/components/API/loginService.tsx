import { axiosInstance } from '../../core/services/addToken';
import * as CryptoJS from 'crypto-js';
import { useState } from 'react';
import { environment as env } from '../../core/services/environment';

// You can replace this with your environment values or define them elsewhere.
const environment = {
  serverUrl: env.serverUrl, // Replace with your API URL
  encryptionParsePhrase: env.encryptionParsePhrase // Replace with your encryption key
};

// Helper function to check if storage is available
const isStorageAvailable = () => {
  try {
    const testKey = 'test';
    localStorage.setItem(testKey, testKey);
    localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
};

export const useLoginService = () => {
  const [showSecurityTokenInput, setShowSecurityTokenInput] = useState<boolean>(false);

  // 2FA Status check
  const getTwoFactorAuthStatus = async () => {
    const url = `${environment.serverUrl}/v1/user/2faEnabled`;
    try {
      const response = await axiosInstance.get(url);
      return response.data;
    } catch (error) {
      console.error('Error getting 2FA status:', error);
      throw error;
    }
  };

  // Login function
  const login = async (loginData: { username: string; password: string; token: string }) => {
    const key = CryptoJS.enc.Utf8.parse(environment.encryptionParsePhrase);
    const iv = CryptoJS.enc.Utf8.parse(environment.encryptionParsePhrase);
    const encryptionConfig = {
      keySize: 16,
      iv: iv,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    };

    const encryptedUsername = CryptoJS.AES.encrypt(loginData.username, key, encryptionConfig).toString();
    const encryptedPassword = CryptoJS.AES.encrypt(loginData.password, key, encryptionConfig).toString();

    const url = `${environment.serverUrl}/oauth/token?grant_type=password&username=${encryptedUsername}&password=${encryptedPassword}&token=${loginData.token}`;
    
    try {
      const response = await axiosInstance.post(url);
      return response.data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };

  // Set or get the security token input
  const setSecurityTokenInput = (value: boolean) => {
    setShowSecurityTokenInput(value);
  };

  // Fetch the user profile
  const getProfile = async () => {
    const url = `${environment.serverUrl}/licenses/getAllLicenses`;
    try {
      const response = await axiosInstance.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching profile:', error);
      throw error;
    }
  };

  // Logout function
  const logout = async () => {
    if (isStorageAvailable()) {
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');

      if (accessToken && refreshToken) {
        try {
          await axiosInstance.delete(`${environment.serverUrl}/removeTokens`, {
            headers: {
              accessToken: accessToken,
              refreshToken: refreshToken,
            },
          });
        } catch (error) {
          console.error('Error during logout:', error);
        }
      }

      // Clear localStorage
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('userRoles');
      localStorage.removeItem('userPermissions');
      localStorage.removeItem('profile');
    }
  };

  // Refresh the authentication token
  const refreshAuthToken = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      try {
        const response = await axiosInstance.post(
          `${environment.serverUrl}/oauth/token?grant_type=refresh_token&refresh_token=${refreshToken}`
        );
        return response.data;
      } catch (error) {
        console.error('Error refreshing auth token:', error);
        throw error;
      }
    } else {
      console.error('No refresh token available');
    }
  };

  // Get all users
  const getAllUsers = async () => {
    const url = `${environment.serverUrl}/v1/user/getAllUsers`;
    try {
      const response = await axiosInstance.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching all users:', error);
      throw error;
    }
  };

  // Get secret key for a user
  const getSecreteKey = async (username: string) => {
    const url = `${environment.serverUrl}/v1/user/getsecretekey/${username}/`;
    try {
      const response = await axiosInstance.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching secret key:', error);
      throw error;
    }
  };

  // Get logged-in user details
  const getLoggedInUserDetails = async () => {
    const url = `${environment.serverUrl}/v1/user/getLoggedinUser`;
    try {
      const response = await axiosInstance.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching logged-in user details:', error);
      throw error;
    }
  };

  // Get SSO login info
  const getSSOloginInfo = async (data: any) => {
    const url = `${environment.serverUrl}/v1/sso/auth/verifyUser`;
    try {
      const response = await axiosInstance.post(url, data);
      return response.data;
    } catch (error) {
      console.error('Error during SSO login:', error);
      throw error;
    }
  };

  // Get SS Demo details
  const getSSDemoDetails = async () => {
    const url = `${environment.serverUrl}/v1/entity/ssd`;
    try {
      const response = await axiosInstance.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching SS demo details:', error);
      throw error;
    }
  };

  // Mark notification as read
  const markNotificationAsRead = async (incId: string) => {
    const url = `${environment.serverUrl}/v1/incident/notification/markasread/${incId}`;
    try {
      const response = await axiosInstance.get(url);
      return response.data;
    } catch (error) {
      console.error('Error marking notification as read:', error);
      throw error;
    }
  };

  return {
    showSecurityTokenInput,
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
    markNotificationAsRead,
  };
};
