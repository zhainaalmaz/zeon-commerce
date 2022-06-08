import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useLocation, useNavigate } from 'react-router-dom';
import './BreadCrumbs.css';
// import { useSelector } from 'react-redux';

export default function Breadcrumb() {
  const navigate = useNavigate();
  const pathname = useLocation();

  const pathnames = pathname.pathname.split('/').filter((x) => x);

  // const product = useSelector((state) => state.products.data);
  // const filteredProduct = product.find((item) => item.id == pathnames[1]);

  const breadCrumbsName = {
    collection: 'Коллекции',
    about: 'О нас',
    news: 'Новости',
    favorite: 'Избранное',
    searchpage: 'Результаты поиска',
    help: 'Помощь',
    cart: 'Корзина',
    offert: 'Публичная офферта',
  };

  return (
    <div className="breadcrumb">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          {pathname.lengh > 0 ? (
            <button className="navLink2" onClick={() => navigate('/')}>
              Главная
            </button>
          ) : (
            <p className="text2">Главная</p>
          )}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <p className="text" key={name}>
                {breadCrumbsName[name]}
              </p>
            ) : (
              <p className="text" key={name} onClick={() => navigate(routeTo)}>
                {breadCrumbsName[name]}
              </p>
            );
          })}
        </Breadcrumbs>
      </div>
    </div>
  );
}
