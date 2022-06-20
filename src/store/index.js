import { configureStore } from '@reduxjs/toolkit';
import productSlice from './productSlice';
import favoriteSlice from './favoriteSlice';
import collectionsSlice from './collectionsSlice';
import commerceSlice from './commerceSlice';
import cartSlice from './cartSlice';
import breadCrumbsSlice from './breadCrumbsSlice';
import floatingSlice from './floatingSlice';
import userSlice from './userSlice';

export const store = configureStore({
  reducer: {
    products: productSlice,
    favorite: favoriteSlice,
    collections: collectionsSlice,
    commerce: commerceSlice,
    cart: cartSlice,
    bread: breadCrumbsSlice,
    float: floatingSlice,
    user: userSlice,
  },
});

window.store = store;

export default store;
