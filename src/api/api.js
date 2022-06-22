import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://zeon-auth-dfaaf-default-rtdb.firebaseio.com/zeon',
});

export const axiosinstance = axios.create({
  baseURL: 'https://zeon-auth-dfaaf-default-rtdb.firebaseio.com/',
});
