import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import favoriteSlice from './favoriteSlice';
import collectionsSlice from './collectionsSlice';
import commerceSlice from './commerceSlice';
import cartSlice from './cartSlice';
// import searchSlice from './searchSlice';

export const store = configureStore({
  reducer: {
    products: productSlice,
    favorite: favoriteSlice,
    collections: collectionsSlice,
    commerce: commerceSlice,
    cart: cartSlice,
    // searchSort: searchSlice,
  },
});

window.store = store;

export default store;
