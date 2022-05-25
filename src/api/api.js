import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://e-commerce-5824b-default-rtdb.firebaseio.com/zeon/',
});
