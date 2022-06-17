import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { NavLink } from 'react-router-dom';
import cls from './CollectionCard.module.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function CollectionCard({ item }) {
  return (
    <>
      <div className={cls.card} key={item.id}>
        <CardMedia component="img" height="374" image={item.image} alt="hhhh" />
        <h5 className={cls.card_title}>{item.title}</h5>

        <NavLink
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
