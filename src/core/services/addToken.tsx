import axios, { AxiosInstance } from 'axios';
import CryptoJS from 'crypto-js';
import { environment } from './environment';

class AddTokenService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: environment.serverUrl,
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request Interceptor
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const accessToken = localStorage.getItem('accessToken');

        // Add Authorization Header for specific routes
        if (config.url?.includes('oauth') || config.url?.includes('getsecretekey')) {
          config.headers.Authorization = `Basic ${btoa('cybernetix-client:secret')}`;
        } else if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response Interceptor
    this.axiosInstance.interceptors.response.use(
      (response) => {
        // Handle encrypted response data
        if (response.data?.encryptedData) {
          try {
            const decryptedData = CryptoJS.AES.decrypt(
              response.data.encryptedData,
              environment.API_KEY,
              environment.API_CIPHER
            ).toString(CryptoJS.enc.Utf8);
            response.data = JSON.parse(decryptedData);
          } catch (error) {
            console.error('Error decrypting response:', error);
          }
        }
        return response;
      },
      (error) => {
        if (error.response?.status === 401) {
          this.handleUnauthorizedError();
        }
        return Promise.reject(error);
      }
    );
  }

  private handleUnauthorizedError() {
    localStorage.clear();
    const currentUrl = window.location.pathname;
    localStorage.setItem('redirectURL', currentUrl);

    window.location.href = '/login';
  }

  public refreshToken() {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      return this.axiosInstance
        .post(`/oauth/token?grant_type=refresh_token&refresh_token=${refreshToken}`)
        .then((response) => {
          localStorage.setItem('accessToken', response.data.access_token);
        })
        .catch((error) => {
          console.error('Error refreshing token:', error);
          this.handleUnauthorizedError();
        });
    }
  }

  public getAxiosInstance(): AxiosInstance {
    return this.axiosInstance;
  }
}

const addTokenService = new AddTokenService();
export const axiosInstance = addTokenService.getAxiosInstance();
