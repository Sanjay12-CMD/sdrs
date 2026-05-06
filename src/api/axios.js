import axios from 'axios';

// Correct production backend URL fallback
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://sdrsapi.sdrsgoldfinance.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Response interceptor for global error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data?.message || error.message);
    return Promise.reject(error);
  }
);

export default api;
