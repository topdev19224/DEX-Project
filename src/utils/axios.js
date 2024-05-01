import axios from 'axios';
import constants from './config';

const instance = axios.create({
  baseURL: constants.BASE_URL,
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem('token')}`
  }
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

/* ********** FUNCTIONS  ********** */
instance.setToken = (accessToken) => {
  instance.defaults.headers.Authorization = `Bearer ${accessToken}`;
};

export default instance;
