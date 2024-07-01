import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000/api',
});

export default axiosClient;