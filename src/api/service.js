import { axiosInstance } from './api';
import { axiosinstance } from './api';

export const getCoruselImageRequest = () => {
  return axiosInstance.get('corusel.json');
};

export const getProductsRequest = () => {
  return axiosInstance.get('products.json');
};

export const getCollectionsRequest = () => {
  return axiosInstance.get('collections.json');
};

export const getCommerceRequest = () => {
  return axiosInstance.get('commerce.json');
};

export const getUsersOrderRequest = () => {
  return axiosinstance.get('name.json?orderBy="userId"');
};
