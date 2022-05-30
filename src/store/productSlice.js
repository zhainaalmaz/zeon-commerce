import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProductsRequest } from '../api/service';

const initialState = {
  data: [],
  status: '',
  news: [],
};

export const fetchAsyncProducts = createAsyncThunk('products', async () => {
  const response = await getProductsRequest();
  return response.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // getAllData: (state, action) => {
    //   state.allData = action.payload;
    // },
    // getNews: (state, action) => {
    //   state.news = state.allData.filter((item) => item.news);
    // },
  },

  extraReducers: {
    [fetchAsyncProducts.pending]: (state, action) => {
      state.status = 'pending';
      console.log('Pending');
    },
    [fetchAsyncProducts.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.data = action.payload;
      console.log('Fetched Successufully!');
    },
    [fetchAsyncProducts.rejected]: (state) => {
      state.status = 'rejected';
      console.log('Rejected');
    },
  },
});
// export const { getAllData, getNews } = productsSlice.actions;
export const productsAction = productsSlice.actions;
export default productsSlice.reducer;
