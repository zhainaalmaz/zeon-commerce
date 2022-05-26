import { axiosInstance } from './api';

export const getLogoRequest = () => {
  return axiosInstance.get('commerce.json');
};

export const getInfoAboutUsRequest = () => {
  return axiosInstance.get('commerce.json');
};

export const getNewsRequest = () => {
  return axiosInstance.get('commerce.json');
};

export const getNumberRequest = () => {
  return axiosInstance.get('commerce.json');
};

export const getCoruselImageRequest = () => {
  return axiosInstance.get('corusel.json');
};

export const getProductsRequest = () => {
  return axiosInstance.get('products.json');
};
