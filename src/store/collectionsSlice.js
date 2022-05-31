import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCollectionsRequest } from '../api/service';

const initialState = {
  data: [],
  status: '',
};

export const fetchAsyncCollections = createAsyncThunk(
  'collections',
  async () => {
    try {
      const response = await getCollectionsRequest();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const collectionsSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncCollections.pending]: (state, action) => {
      state.status = 'pending';
    },
    [fetchAsyncCollections.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.data = action.payload;
    },
    [fetchAsyncCollections.rejected]: (state) => {
      state.status = 'rejected';
    },
  },
});

export const collectionsAction = collectionsSlice.actions;
export default collectionsSlice.reducer;
