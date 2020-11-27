import axios from 'axios';

const api = axios.create({
  baseURL: 'http://homologacao.jaguarimobiliario.com.br/',
});

export default api;
