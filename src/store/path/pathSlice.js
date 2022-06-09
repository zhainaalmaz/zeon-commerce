import { createSlice } from '@reduxjs/toolkit';

const pathSlice = createSlice({
  name: 'paths',
  initialState: { paths: {} },
  reducers: {
    setPaths(state, { payload }) {
      state.paths = payload;
    },
  },
});

export default pathSlice;

export const pathActions = pathSlice.actions;
