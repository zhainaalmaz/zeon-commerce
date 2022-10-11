import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3004/',
});

// export const axiosinstance = axios.create({
//   baseURL: 'https://zeon-auth-dfaaf-default-rtdb.firebaseio.com/',
// });
