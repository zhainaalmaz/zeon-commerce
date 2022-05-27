import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';

export const store = configureStore({
  reducer: {
    products: productSlice,
  },
});

export const productsAction = productSlice.actions;

export default store;
