import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL
});
axiosInstance.interceptors.request.use(
  function (config) {
    if (!config.headers.Authorization) {
      const token = JSON.parse(sessionStorage.getItem('token'));
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
