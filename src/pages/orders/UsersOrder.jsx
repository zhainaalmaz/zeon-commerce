import React from 'react';
import { getUsersOrderRequest } from '../../api/service';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAsyncUsersorder = createAsyncThunk('orders', async () => {
  const response = await getUsersOrderRequest();
  console.log(response.data, 'orders');
  return response.data;
});

const UsersOrder = () => {
  return <div>{}</div>;
};

export default UsersOrder;
