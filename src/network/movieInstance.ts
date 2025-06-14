import axios from 'axios';

const movieInstance = axios.create({
  baseURL: config.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: config.API_BEARER_TOKEN, // 🔐 static token
  },
});

export default movieInstance;
