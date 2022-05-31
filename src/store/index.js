import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import favoriteSlice from './favoriteSlice';
import collectionsSlice from './collectionsSlice';

export const store = configureStore({
  reducer: {
    products: productSlice,
    favorite: favoriteSlice,
    collections: collectionsSlice,
  },
});

export default store;
