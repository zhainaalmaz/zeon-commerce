import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://zeon-commerce-store-default-rtdb.firebaseio.com/zeon',
});

export const axiosinstance = axios.create({
  baseURL: 'https://zeon-commerce-store-default-rtdb.firebaseio.com/',
});
