import React from 'react';
import MainCarosel from '../carosel/MainCarosel';
import BestSeller from './BestSeller';
import NewProducts from './NewProducts';
import { Divider } from '@mui/material';
import Collection from './Collection';
import Advantages from './Advantages';

const Main = () => {
  return (
    <div style={{ backgroundColor: '#f8f8f8', width: '100%' }}>
      <Divider />
      <div className="container">
        <MainCarosel />
        <BestSeller />
        <NewProducts />
        <Collection />
        <Advantages />
      </div>
    </div>
  );
};

export default Main;
