import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Button from '../../ui/Button';
import { ReactComponent as BasketSvg } from '../../assets/icons/basket.svg';
import { ReactComponent as HeartSvg } from '../../assets/icons/heart3.svg';
import { ReactComponent as HeartedSvg } from '../../assets/icons/heart2.svg';
import {
  onAddToFavorite,
  onRemoveFromFavorite,
} from '../../store/favoriteSlice';
import { addToCart } from '../../store/cartSlice';
import { useNavigate } from 'react-router-dom';
import InterestedProducts from '../interestedProducts/InterestedProducts';
import cls from './Product.module.css';
import { useAuth } from '../../hooks/use-auth';

const Product = () => {
  const params = useParams();
  const products = +params.productId;
  const product = useSelector((state) => state.products.data);
  const filteredProduct = product.filter((item) => item.id === products);
  const favoriteItems = useSelector((state) => state.favorite.favoriteItems);
  console.log(favoriteItems, 'fav');
  const sameProduct = product.filter((element) => element.title);
  const [selectedColor, setSelectedColor] = useState('#73A39D');
  const [isSelectedProduct, setIsSelectedProduct] = useState(true);

  console.log(favoriteItems);
  console.log(filteredProduct);

  const isFavorite = favoriteItems.some(
    (elem) => elem.id === filteredProduct[0].id
  );
  console.log(isFavorite, 'is');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [count] = useState(5);

  const { isAuth } = useAuth();

  const onAddFavorite = (item) => {
    dispatch(onAddToFavorite(item));
  };

  const onRemoveFavorite = (item) => {
    dispatch(onRemoveFromFavorite(item));
  };

  const addToCartHandler = (item) => {
    if (isAuth) {
      const newItem = { ...item, selectColor: selectedColor };
      newItem.quantity = 1;
      dispatch(addToCart(newItem));
      setIsSelectedProduct((prev) => !prev);
    } else {
      navigate('/login');
    }
  };

  const changeMode = () => {
    setIsSelectedProduct(selectedColor);
  };

  const handleToGoCart = () => {
    navigate('/cart');
  };

  // const isFavProduct = (item) => {
  //   favoriteItems.id === item.id;
  // };

  return (
    <div style={{ background: '#ECECEC' }}>
      <div className="container">
        {filteredProduct.map((item) => (
          <div className={cls.main} key={item.id}>
            <div className={cls.section}>
              <img
                className="scale"
                src={item.productImages[0].image}
                alt="img"
              />
              <img
                className="scale"
                src={item.productImages[1].image}
                alt="img"
              />
              <img
                style={{ marginBottom: 0 }}
                className="scale"
                src={item.productImages[2].image}
                alt="img"
              />
              <img
                style={{ marginBottom: 0 }}
                className="scale"
                src={item.productImages[3].image}
                alt="img"
              />
            </div>

            <div className={cls.block} key={item.id}>
              <h5 className={cls.title}>{item.title}</h5>
              <div className={cls.content}>
                <p className={cls.description}>
                  Артикул:<span className={cls.span}> {item.article}</span>
                </p>
                <div className={cls.colors}>
                  <div className={cls.description}>
                    Цвет:
                    {item.colors.map((color) => (
                      <div
                        className={cls.color}
                        key={color.id}
                        onClick={() => setSelectedColor(color.color)}
                        style={{
                          backgroundColor: `${color.color}`,
                          position: 'relative',
                        }}
                      >
                        <input
                          onClick={changeMode}
                          style={{
                            opacity: 0,
                            overflow: 'hidden',
                            position: 'absolute',
                          }}
                          className="radio"
                          name="radio"
                          id="radio"
                          type="radio"
                          defaultChecked={color.color === '#73A39D'}
                        />
                        <label htmlFor="radio"></label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={cls.priceTitle}>
                  {item.discount ? (
                    <>
                      <p className={cls.price}>
                        {item.discount.toLocaleString()} p
                      </p>
                      <span className={cls.prevPrice}>
                        {item.previousPrice.toLocaleString()} p
                      </span>
                    </>
                  ) : (
                    <span className={cls.span}>
                      {item.previousPrice.toLocaleString()} p
                    </span>
                  )}
                </div>
                <p className={cls.description}>O товаре:</p>
                <p className={cls.aboutItem}>{item.description}</p>
                <div
                  style={{
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                  }}
                >
                  <div className={cls.table}>
                    <div>
                      <p className={cls.description}>
                        Размерный ряд:
                        <span className={cls.span}>{item.sizeRage}</span>
                      </p>
                      <p className={cls.description}>
                        Количество в линейке :
                        <span className={cls.span}>{item.amountOfLines}</span>
                      </p>
                    </div>
                    <div style={{ textAlign: 'end' }}>
                      <p className={cls.description}>
                        Состав ткани:
                        <span className={cls.span}> {item.structure}</span>
                      </p>
                      <p className={cls.description}>
                        Материал:
                        <span className={cls.span}>{item.material}</span>
                      </p>
                    </div>
                  </div>
                  <div className={cls.buttons}>
                    {!isSelectedProduct ? (
                      <Button
                        style={{
                          width: '418px',
                          height: '44px',
                          marginRight: 5,
                          backgroundColor: 'black',
                        }}
                        onClick={handleToGoCart}
                      >
                        <BasketSvg style={{ marginRight: 7 }} fill="white" />
                        <span className={cls.addToBasket}>
                          Перейти в корзину
                        </span>
                      </Button>
                    ) : (
                      <Button
                        style={{
                          width: '418px',
                          height: '44px',
                          marginRight: 5,
                          backgroundColor: 'black',
                        }}
                        onClick={() => addToCartHandler(item)}
                      >
                        <BasketSvg style={{ marginRight: 7 }} fill="white" />
                        <span className={cls.addToBasket}>
                          Добавить в корзину
                        </span>
                      </Button>
                    )}

                    <div>
                      {isFavorite ? (
                        <Button
                          style={{
                            height: '44px',
                            marginRight: 5,
                            backgroundColor: 'black',
                          }}
                        >
                          <HeartSvg
                            fill="will"
                            onClick={() => onRemoveFavorite(item)}
                          />
                        </Button>
                      ) : (
                        <Button
                          style={{
                            height: '44px',
                            marginRight: 5,
                            backgroundColor: 'black',
                          }}
                        >
                          <HeartedSvg
                            fill="white"
                            onClick={() => onAddFavorite(item)}
                          />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div>
          <h6 className={cls.sameProductTitle}>Похожие товары</h6>
          <div className={cls.interestedProducts}>
            {sameProduct.slice(0, count).map((item) => (
              <InterestedProducts key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
