import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.104:3001/api',
});

api.postOrPut = (url, id, data, config = {}) => {
  const method = id ? 'put' : 'post';
  const apiUrl = id ? `${url}/${id}` : url;

  return api[method](apiUrl, data, config);
};

export default api;
