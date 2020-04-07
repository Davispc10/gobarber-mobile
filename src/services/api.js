import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gobarber-back.herokuapp.com/',
});

export default api;
