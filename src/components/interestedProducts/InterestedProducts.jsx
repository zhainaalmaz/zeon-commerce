import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { mathPercent } from '../../utils';
import { ReactComponent as DiscounSvg } from '../../assets/icons/discount.svg';
import { ReactComponent as Heart } from '../../assets/icons/heart1.svg';
import { ReactComponent as Hearted } from '../../assets/icons/heart2.svg';
import {
  onAddToFavorite,
  onRemoveFromFavorite,
} from '../../store/favoriteSlice';
import cls from './InterestedProducts.module.css';

const InterestedProducts = ({ item }) => {
  const [index, setIndex] = useState(0);
  const [marginRightState, setMarginRightState] = useState(30);

  const params = useParams();
  const collectionId = params.collectionList;
  const favoriteItems = useSelector((state) => state.favorite.favoriteItems);
  const filteredFev = favoriteItems.find((el) => el.id === item.id);

  const dispatch = useDispatch();

  const onAddFavorite = (item) => {
    dispatch(onAddToFavorite(item));
  };

  const onRemoveFavorite = (item) => {
    dispatch(onRemoveFromFavorite(item));
  };

  const onMouseLeaveHandler = () => {
    setMarginRightState(30);
    setIndex(0);
  };

  const onMouseMoveHandler = (event) => {
    const movementX = event.movementX;

    if (marginRightState > 0 && marginRightState < 50) {
      setIndex(0);
    } else if (marginRightState > 50 && marginRightState < 100) {
      setIndex(1);
    } else if (marginRightState > 100 && marginRightState < 150) {
      setIndex(2);
    } else if (marginRightState > 150 && marginRightState < 210) {
      setIndex(3);
    }
    if (marginRightState < 0) {
      setMarginRightState(220);
    } else {
      setMarginRightState(marginRightState + movementX);
    }
  };

  return (
    <div className={cls.container}>
      <>
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
      </>
      <Link to={`/${collectionId}/${item.id}`}>
        <div
          className={cls.slideShow}
          style={{ overflow: 'hidden', width: 226 }}
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

        <div style={{ margin: '0 8px' }}>
          <p className={cls.priceTitle}>
            <span>
              {item.discount ? (
                <>
                  <span>{item.discount} p </span>
                  <span className="previousPrice">{item.previousPrice} p</span>
                </>
              ) : (
                <span>{item.previousPrice} p</span>
              )}
            </span>
          </p>
          <p className={cls.title}>{item.title}</p>
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
      </Link>
    </div>
  );
};

export default InterestedProducts;
