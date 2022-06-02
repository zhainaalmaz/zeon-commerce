import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCommerceRequest } from '../api/service';

const initialState = {
  data: {},
  status: '',
};

export const fetchAsyncCommerce = createAsyncThunk('commerce', async () => {
  const response = await getCommerceRequest();
  return response.data;
});

const commerceSlice = createSlice({
  name: 'commerce',
  initialState,
  reducers: {},

  extraReducers: {
    [fetchAsyncCommerce.pending]: (state) => {
      state.status = 'pending';
    },
    [fetchAsyncCommerce.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.data = action.payload;
    },
    [fetchAsyncCommerce.rejected]: (state) => {
      state.status = 'rejected';
    },
  },
});

export const commerceAction = commerceSlice.actions;
export default commerceSlice.reducer;
