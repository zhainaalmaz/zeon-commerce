import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { NavLink } from 'react-router-dom';
import cls from './CollectionCard.module.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useDispatch } from 'react-redux';
import { asyncUpdateBreadcrumb } from '../../../store/breadCrumbsSlice';

export default function CollectionCard({ item }) {
  const dispatch = useDispatch();

  const sendBreadCrumbsHandler = () => {
    const breadCrumbs = [
      {
        route_name: 'Главное',
        route: '/',
      },
      {
        route_name: 'Коллекции',
        route: '/collections',
      },
      {
        route_name: item?.title ? item?.title : item?.collection,
      },
    ];
    dispatch(asyncUpdateBreadcrumb(breadCrumbs));
  };
  return (
    <>
      <div className={cls.card} key={item.id}>
        <div className={cls.cardmedia}>
          <CardMedia
            component="img"
            height="374"
            image={item.image}
            alt="hhhh"
          />
        </div>
        <h5 className={cls.card_title}>{item.title}</h5>

        <NavLink
          onClick={sendBreadCrumbsHandler}
          to={`/${item.id}`}
          style={{
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: '17px',
            color: '#ffffff',
          }}
        >
          <div className={cls.card_button}>
            Смотреть все
            <ArrowForwardIosIcon style={{ marginLeft: 10 }} />
          </div>
        </NavLink>
      </div>
    </>
  );
}
