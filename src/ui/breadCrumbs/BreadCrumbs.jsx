import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { useLocation, useNavigate } from 'react-router-dom';
import './BreadCrumbs.css';
import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';

export default function Breadcrumb() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

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

  const { paths } = useSelector((state) => state.path);
  const pathnames = pathname.split('/').filter((x) => x);
  const getPathNames = pathnames.map((el) => ({
    link: paths[el] || breadCrumbsName[el],
  }));

  // const product = useSelector((state) => state.products.data);
  // const collection = useSelector((state) => state.collections.data);

  // const filteredProduct = product.find((item) => item.id == pathnames[1]);
  // const filteredcollection = collection.find((item) => item.id == pathnames[0]);

  // console.log(filteredcollection?.title, 'collection path');

  // console.log(filteredProduct?.title, 'product path');

  return (
    <div className="breadcrumb">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          {pathname.length > 0 ? (
            <button className="navLink2" onClick={() => navigate('/')}>
              Главная
            </button>
          ) : (
            <p className="text2">Главная</p>
          )}
          {getPathNames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              <p className="text" key={name.link}>
                {name.link}
                {/* {breadCrumbsName[name]} */}
              </p>
            ) : (
              <p
                className="text"
                key={name.link}
                onClick={() => navigate(routeTo)}
              >
                {name.link}
                {/* {breadCrumbsName[name]} */}
              </p>
            );
          })}
        </Breadcrumbs>
      </div>
    </div>
  );
}
