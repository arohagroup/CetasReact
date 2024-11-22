import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import CryptoJS from 'crypto-js';
import { environment } from './environment';

class AddTokenService {
  private axiosInstance: AxiosInstance;
  private API_KEY: any = environment.API_KEY;
  private API_CIPHER: any = environment.API_KEY;
  private baseURL: any = environment.serverUrl;

  constructor(apiKey: string, apiCipher: string, baseURL: string) {
    this.API_KEY = apiKey;
    this.API_CIPHER = apiCipher;
    this.baseURL = baseURL;

    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request Interceptor
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const accessToken = localStorage.getItem('accessToken');

        // Add Authorization Header for specific routes
        if (config.url?.includes('oauth') || config.url?.includes('getsecretekey')) {
          config.headers.Authorization = `Basic ${btoa('cybernetix-client:secret')}`;
        } else if (
          config.url?.includes('2faEnabled') ||
          config.url?.includes('verifyUser')
        ) {
          // No modifications for these specific routes
        } else if (accessToken) {
          config.headers.Authorization= `Bearer ${accessToken}`;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response Interceptor
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        // Decrypt the response if it contains 'encryptedData'
        if (response.data?.encryptedData) {
          try {
            const decryptedData = CryptoJS.AES.decrypt(
              response.data.encryptedData,
              this.API_KEY,
              this.API_CIPHER
            ).toString(CryptoJS.enc.Utf8);
            response.data = JSON.parse(decryptedData);
          } catch (error) {
            console.error('Error decrypting response:', error);
          }
        }
        return response;
      },
      (error) => {
        // Handle 401 Unauthorized errors
        if (error.response?.status === 401) {
          this.handleUnauthorizedError();
        }
        return Promise.reject(error);
      }
    );
  }

  private handleUnauthorizedError() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    const currentUrl = window.location.pathname;
    localStorage.setItem('redirectURL', currentUrl);

    // Redirect to login page
    window.location.href = '/login';
  }

  public refreshToken() {
    const refreshToken = localStorage.getItem('refreshToken');

    if (refreshToken) {
      return this.axiosInstance
        .post(
          `/oauth/token?grant_type=refresh_token&refresh_token=${refreshToken}`
        )
        .then((response) => {
          const { access_token } = response.data;
          localStorage.setItem('accessToken', access_token);
        })
        .catch((error) => {
          console.error('Error refreshing token:', error);
          this.handleUnauthorizedError();
        });
    }
  }

  public checkSessionToken() {
    const accessToken = localStorage.getItem('accessToken');
    const accessTokenTime = new Date(
      localStorage.getItem('accessTokenTime') || ''
    ).getTime();
    const currentTime = new Date().getTime();

    // Check if the token has expired
    if (currentTime > accessTokenTime) {
      this.refreshToken();
    }
  }

  public getAxiosInstance(): AxiosInstance {
    return this.axiosInstance;
  }
}

export default AddTokenService;
