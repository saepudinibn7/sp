import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `http://localhost/apps/api/`,
  headers: {
    Authorization: '{token}'
  }
})