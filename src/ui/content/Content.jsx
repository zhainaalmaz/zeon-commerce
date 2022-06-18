import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as Heart } from '../../assets/icons/heart1.svg';
import { ReactComponent as Hearted } from '../../assets/icons/heart2.svg';
import {
  onAddToFavorite,
  onRemoveFromFavorite,
} from '../../store/favoriteSlice';
import { ReactComponent as DiscounSvg } from '../../assets/icons/discount.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { mathPercent } from '../../utils';
import cls from './Content.module.css';
import { asyncUpdateBreadcrumb } from '../../store/breadCrumbsSlice';

const Content = ({ item, title }) => {
  const params = useParams();
  const collectionId = params.collectionList;
  const favoriteItems = useSelector((state) => state.favorite.favoriteItems);
  const breadcrumbs = useSelector((state) => state.bread.breadCrumbsData) || [];
  const filteredFev = favoriteItems.find((el) => el.id === item.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendBreadCrumbsHandler = () => {
    const breadCrumbs = collectionId
      ? [
          {
            route_name: 'Главное',
            route: '/',
          },
          {
            route_name: 'Коллекции',
            route: '/collections',
          },
          {
            route_name: title,
            route: `/${collectionId}`,
          },
          {
            route_name: item?.title
              ? item?.title
              : item?.collection
              ? item.collection
              : '',
          },
        ]
      : [
          {
            route_name: 'Главное',
            route: '/',
          },
          {
            route_name: item.title,
          },
        ];
    dispatch(asyncUpdateBreadcrumb(breadCrumbs));
  };

  const navigateHandler = () => {
    sendBreadCrumbsHandler();
    if (!!collectionId) {
      navigate(`/${collectionId}/${item.id}`);
    } else {
      navigate(`/products/${item.id}`);
    }
  };

  const onAddFavorite = (item) => dispatch(onAddToFavorite(item));
  const onRemoveFavorite = (item) => dispatch(onRemoveFromFavorite(item));

  return (
    <div className={cls.container}>
      <div style={{ position: 'absolute' }}>
        {!!item.discount && (
          <span className={cls.percentText}>
            {`${mathPercent(item.previousPrice, item.discount)}`}%
          </span>
        )}
        {!!item.discount && <DiscounSvg />}
      </div>

      {!filteredFev && (
        <Hearted
          className={cls.hearted}
          role="presentation"
          onClick={() => onAddFavorite(item)}
        />
      )}
      {!!filteredFev && (
        <Heart className={cls.heart} onClick={() => onRemoveFavorite(item)} />
      )}

      <button
        onClick={navigateHandler}
        style={{
          border: 'none',
          textAlign: 'start',
          backgroundColor: 'white',
        }}
      >
        <img className={cls.images} src={item.productImages[0].image} alt="/" />
        <div style={{ margin: '8px' }}>
          <h5 className={cls.content_title}>{item.title}</h5>
          <p className={cls.content_priceTitle} style={{ marginTop: '5px' }}>
            <span>
              {item.discount ? (
                <>
                  <span style={{ marginRight: 5 }}>
                    {item.discount.toLocaleString()} p
                  </span>
                  <span className="previousPrice">
                    {item.previousPrice.toLocaleString()} p
                  </span>
                </>
              ) : (
                <span>{item.previousPrice.toLocaleString()} p</span>
              )}
            </span>
          </p>
          <p className={cls.sizeTitle}>Размер: {item.sizeRage}</p>
          <div className={cls.colors}>
            {item.colors.map((color) => (
              <div
                className={cls.color}
                key={color.id}
                style={{ backgroundColor: `${color.color}` }}
              ></div>
            ))}
          </div>
        </div>
      </button>
    </div>
  );
};

export default Content;
