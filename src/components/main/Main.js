import React from 'react';
import MainCarosel from '../carosel/MainCarosel';
import BestSeller from './BestSeller';
import NewProducts from './NewProducts';

const Main = () => {
  return (
    <div>
      <MainCarosel />
      <BestSeller />
      <NewProducts />
    </div>
  );
};

export default Main;
