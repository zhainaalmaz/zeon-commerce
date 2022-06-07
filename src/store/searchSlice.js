import { createSlice } from '@reduxjs/toolkit';

const searchSort = createSlice({
  name: 'searchSort',
  initialState: {
    searchSort: [],
  },
  reducers: {
    addToSort(state, action) {
      state.searchSort = action.payload;
    },
  },
});

export const { addToSort } = searchSort.actions;
export default searchSort.reducer;
