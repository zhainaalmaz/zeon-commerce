import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Content from '../../ui/content/Content';
import InterestedProducts from '../../components/interestedProducts/InterestedProducts';
import cls from './Favorite.module.css';
import { asyncUpdateBreadcrumb } from '../../store/breadCrumbsSlice';

const Favorite = () => {
  const product = useSelector((state) => state.products.data);
  const filteredItem = product.filter((item) => item.discount);

  const favoriteItem = useSelector((state) => state.favorite.favoriteItems);
  const [interestPost, setInterestedPost] = useState([]);
  const [count] = useState(5);
  const [limit, setLimit] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setInterestedPost(filteredItem);
  }, []);

  useEffect(() => {
    changeLimit(6);
  }, []);

  const changeLimit = (num) => {
    setLimit((limit) => limit + num);
  };

  const scrollHandler = (e) => {
    e.target.documentElement.scrollHeight -
      (e.target.documentElement.scrollTop + window.innerHeight) <
      100 && changeLimit(6);
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const sendBreadCrumbsHandler = () => {
    const breadCrumbs = [
      {
        route_name: 'Главное',
        route: '/',
      },
      {
        route_name: 'Избранное',
      },
    ];
    dispatch(asyncUpdateBreadcrumb(breadCrumbs));
  };

  useEffect(() => {
    sendBreadCrumbsHandler();
  }, []);

  return (
    <div className="container">
      <h5 className={cls.title}>Избранное</h5>
      {favoriteItem.length > 0 ? (
        <>
          <h5 className={cls.count_text}>
            Товаров в избранном: <span>{favoriteItem.length}</span>
          </h5>
          <div className={cls.content}>
            {favoriteItem
              .filter((i, k) => k < limit)
              .map((item) => (
                <Content item={item} key={item.id} />
              ))}
          </div>
        </>
      ) : (
        <>
          <h6 className={cls.text}>У Вас пока нет избранных товаров</h6>
          <p className={cls.title2}>Возможно Вас заинтересует</p>
          <div style={{ display: 'flex' }}>
            {interestPost.slice(0, count).map((item) => (
              <InterestedProducts key={item.id} item={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Favorite;
