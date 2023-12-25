import axios from 'axios';
import Config from 'react-native-config';

// initializing the axios instance with custom configs
const api = axios.create({
  baseURL: Config.BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
