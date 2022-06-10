import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      return state;
    },
    removeFromCart(state, action) {
      const index = state.cartItems.findIndex(
        (item) =>
          item?.selectColor === action.payload.selectColor &&
          item?.id === action.payload.id
      );
      state.cartItems.splice(index, 1);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      return state;
    },
    increaseItem: (state, action) => {
      state.cartItems?.map((item) => {
        if (
          item?.selectColor === action.payload.selectColor &&
          item?.id === action.payload.id
        )
          item.quantity = item.quantity + 1;
      });
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    decreaseItem: (state, action) => {
      state?.cartItems?.map((item) => {
        if (
          item?.selectColor === action.payload.selectColor &&
          item?.id === action.payload.id
        )
          item.quantity = item.quantity - 1;
      });
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    clearItemsFromCart: (state) => {
      state.cartItems = [];
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseItem,
  decreaseItem,
  clearItemsFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
