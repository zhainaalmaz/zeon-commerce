import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteItems: localStorage.getItem('favoriteItems')
    ? JSON.parse(localStorage.getItem('favoriteItems'))
    : [],
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    onAddToFavorite: (state, action) => {
      const tempFavorite = action.payload;
      state.favoriteItems.push(tempFavorite);
      localStorage.setItem(
        'favoriteItems',
        JSON.stringify(state.favoriteItems)
      );
    },
    onRemoveFromFavorite: (state, action) => {
      state.favoriteItems = state.favoriteItems.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem(
        'favoriteItems',
        JSON.stringify(state.favoriteItems)
      );
    },
  },
});

export const { onAddToFavorite, onRemoveFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
