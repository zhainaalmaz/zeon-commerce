import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import favoriteSlice from './favoriteSlice';

export const store = configureStore({
  reducer: {
    products: productSlice,
    favorite: favoriteSlice,
  },
});

export default store;
