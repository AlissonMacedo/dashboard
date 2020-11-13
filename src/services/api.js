import axios from 'axios';

const api = axios.create({
  baseURL: 'http://alexandreamorim-io.umbler.net/api/',
});

export default api;
