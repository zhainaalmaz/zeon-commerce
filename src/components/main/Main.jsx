import React, { useState } from 'react';
import MainCarosel from '../carosel/MainCarosel';
import BestSeller from './bestSeller/BestSeller';
import NewProducts from './newProduct/NewProducts';
import { Divider } from '@mui/material';
import Collection from './collection/Collection';
import Advantages from './advantage/Advantages';
import arrow from '../../assets/icons/up.svg';
import deleteSvg from '../../assets/icons/delete.svg';
import callback from '../../assets/icons/callback.svg';
import Floating from '../floatingButtons/Floating';
import cls from './Main.module.css';
const Main = () => {
  const [open, setOpen] = useState(false);

  const upToScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className={cls.main}>
      <Divider />
      <div className="container" style={{ paddingTop: 10 }}>
        {open && <Floating open={open} setOpen={setOpen} />}
        {/* <MainCarosel /> */}
        <div className={cls.content}>
          {open && (
            <>
              <img
                onClick={() => upToScroll()}
                width="44px"
                style={{ marginRight: '20px' }}
                src={arrow}
                alt="up"
              />

              <img
                className="main-chat"
                style={{
                  marginTop: '10px',
                  marginLeft: '5px',
                  paddingLeft: 5,
                }}
                width="25px"
                onClick={() => toggle()}
                src={deleteSvg}
                alt="cancel"
              />
            </>
          )}
          {!open && (
            <>
              <img
                onClick={() => upToScroll()}
                style={{ marginRight: '20px' }}
                width="44px"
                src={arrow}
                alt="up"
              />
              <img
                className="main-chat"
                onClick={() => toggle()}
                width="44px"
                src={callback}
                alt="chat"
              />
            </>
          )}
        </div>
        <BestSeller />
        <NewProducts />
        <Collection />
        <Advantages />
      </div>
    </div>
  );
};

export default Main;
