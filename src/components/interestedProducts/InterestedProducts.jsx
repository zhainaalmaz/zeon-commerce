import React from 'react';
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
        <img
          className={cls.images}
          src={item.productImages.map((el) => {
            return el.image;
          })}
          alt="/"
        />

        <div style={{ margin: '8px' }}>
          <p className={cls.priceTitle} style={{ marginTop: '5px' }}>
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
          <p className={cls.sizetitle}>Размер: {item.sizeRage}</p>
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
