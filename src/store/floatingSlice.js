import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openDialog: false,
  showsuccess: false,
  openValue: false,
};

const floatingSlice = createSlice({
  name: 'floatingSlice',
  initialState,
  reducers: {
    onChangeOpenDialog: (state) => {
      console.log('sbmd');
      state.openDialog = !state.openDialog;
    },
    onChangeShowSuccess: (state) => {
      state.showsuccess = !state.showsuccess;
    },
    onChangeOpenValue: (state) => {
      state.openValue = !state.openValue;
    },
  },
});

export const { onChangeShowSuccess, onChangeOpenDialog, onChangeOpenValue } =
  floatingSlice.actions;
export default floatingSlice.reducer;
