import React, { useEffect } from 'react';
import MainCarosel from '../carosel/MainCarosel';
import BestSeller from './bestSeller/BestSeller';
import NewProducts from './newProduct/NewProducts';
import Collection from './collection/Collection';
import Advantages from './advantage/Advantages';
import arrow from '../../assets/icons/up.svg';
import deleteSvg from '../../assets/icons/delete.svg';
import callback from '../../assets/icons/callback.svg';
import Floating from '../floatingButtons/Floating';
import cls from './Main.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { asyncUpdateBreadcrumb } from '../../store/breadCrumbsSlice';
import { onChangeOpenValue } from '../../store/floatingSlice';

const Main = () => {
  const dispatch = useDispatch();
  const { openValue } = useSelector((state) => state.float);

  const upToScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const onCloseOpenValue = () => {
    dispatch(onChangeOpenValue());
  };

  useEffect(() => {
    dispatch(asyncUpdateBreadcrumb([]));
  }, []);

  return (
    <div className={cls.main}>
      <div className="container" style={{ paddingTop: 10 }}>
        {openValue && <Floating setOpen={onCloseOpenValue} />}
        <MainCarosel />
        <div className={cls.content}>
          {openValue && (
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
                onClick={onCloseOpenValue}
                src={deleteSvg}
                alt="cancel"
              />
            </>
          )}
          {!openValue && (
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
                onClick={onCloseOpenValue}
                width="44px"
                src={callback}
                alt="chat"
              />
            </>
          )}
        </div>
        <div className={cls.section}>
          <BestSeller />
          <NewProducts />
          <Collection />
          <Advantages />
        </div>
      </div>
    </div>
  );
};

export default Main;
