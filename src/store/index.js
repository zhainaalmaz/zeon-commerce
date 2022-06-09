import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import favoriteSlice from './favoriteSlice';
import collectionsSlice from './collectionsSlice';
import commerceSlice from './commerceSlice';
import cartSlice from './cartSlice';
import pathSlice from './path/pathSlice';

export const store = configureStore({
  reducer: {
    products: productSlice,
    favorite: favoriteSlice,
    collections: collectionsSlice,
    commerce: commerceSlice,
    cart: cartSlice,
    path: pathSlice.reducer,
  },
});

window.store = store;

export default store;
