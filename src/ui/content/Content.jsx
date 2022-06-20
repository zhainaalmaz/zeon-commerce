import React, { useState } from 'react';
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
  const [index, setIndex] = useState(0);
  const [marginRightState, setMarginRightState] = useState(30);

  const params = useParams();
  const collectionId = params.collectionList;
  const favoriteItems = useSelector((state) => state.favorite.favoriteItems);
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

  const onMouseLeaveHandler = () => {
    setMarginRightState(30);
    setIndex(0);
  };

  const onMouseMoveHandler = (event) => {
    const movementX = event.movementX;
    console.log(movementX);
    if (marginRightState > 0 && marginRightState < 70) {
      setIndex(0);
    } else if (marginRightState > 70 && marginRightState < 140) {
      setIndex(1);
    } else if (marginRightState > 140 && marginRightState < 210) {
      setIndex(2);
    } else if (marginRightState > 210 && marginRightState < 280) {
      setIndex(3);
    }
    if (marginRightState < 0) {
      setMarginRightState(280);
    } else {
      setMarginRightState(marginRightState + movementX);
    }
  };

  return (
    <div
      className={cls.container}
      onMouseLeave={onMouseLeaveHandler}
      onMouseMove={onMouseMoveHandler}
    >
      <div style={{ position: 'absolute', zIndex: 3 }}>
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

      <div
        onClick={navigateHandler}
        style={{
          border: 'none',
          textAlign: 'start',
          backgroundColor: 'white',
        }}
      >
        <div
          className={cls.slideShow}
          style={{ overflow: 'hidden' }}
          onMouseLeave={onMouseLeaveHandler}
          onMouseMove={onMouseMoveHandler}
        >
          <div
            className={cls.slideshowSlider}
            style={{ transform: `translateX(${-index * 100}%)` }}
          >
            {item.productImages.map((elem, index) => {
              return (
                <div
                  key={index}
                  className={cls.images}
                  style={{
                    backgroundImage: `url(${elem.image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                />
              );
            })}
          </div>
          <div className={cls.line_layout}>
            <div
              className={cls.line}
              style={{ marginLeft: 25 * index + '%' }}
            ></div>
          </div>
        </div>

        <div style={{ margin: '8px' }}>
          <h5 className={cls.content_title}>{item.title}</h5>
          <p className={cls.content_priceTitle}>
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
      </div>
    </div>
  );
};

export default Content;
