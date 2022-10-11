import { axiosInstance } from './api';

export const getCoruselImageRequest = () => {
  return axiosInstance.get('corusel');
};

export const getProductsRequest = () => {
  return axiosInstance.get('products');
};

export const getCollectionsRequest = () => {
  return axiosInstance.get('collections');
};

export const getCommerceRequest = () => {
  return axiosInstance.get('commerce');
};

// export const getUsersOrderRequest = () => {
//   return axiosinstance.get('name.json?orderBy="userId"');
// };
