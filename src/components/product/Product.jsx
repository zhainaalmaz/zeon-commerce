import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
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
import InterestedProducts from '../InterestedProducts';

const StyledColordiv = styled.div`
  display: flex;
`;

const StyledDivColor = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 6px;
  margin-right: 12px;
  margin-top: 6px;
  opacity: 47%;
  margin-left: 6px;
  padding-bottom: 2px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
`;

const StyledP = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #1d1d1b;
  margin: 8px 0;
`;

const StyledSpan = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  display: flex;
  align-items: center;
  color: #393939;
  margin: 0 10px;
`;

const StyledSection = styled.div`
  width: 624px;
  background: white;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const StyledBlock = styled.div`
  width: 520px;
  height: 464px;
  background: white;
  margin-top: 10px;
  padding: 20px;
`;

const StyledTitle = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #393939;
  text-align: start;
  margin-bottom: 15px;
`;

const StyledPrice = styled.span`
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #393939;
  margin: 10px 0;
  margin-right: 10px;
`;

const StyledDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  color: #6a6a6a;
`;

const StyledPriceTitle = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #393939;
  margin-top: 20px;
`;

const StyledAddToBasketText = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

const Product = () => {
  const params = useParams();
  const products = +params.productId;
  const product = useSelector((state) => state.products.data);
  const filteredProduct = product.filter((item) => item.id === products);
  const favoriteItems = useSelector((state) => state.favorite.favoriteItems);
  const sameProduct = product.filter((element) => element.title);
  const [selectedColor, setSelectedColor] = useState('');
  const [isSelectedProduct, setIsSelectedProduct] = useState(true);

  const navigate = useNavigate();
  const [count] = useState(5);
  const dispatch = useDispatch();

  const onAddFavorite = (item) => {
    dispatch(onAddToFavorite(item));
  };

  const onRemoveFavorite = (item) => {
    dispatch(onRemoveFromFavorite(item));
  };

  const addToCartHandler = (item) => {
    const newItem = { ...item, selectColor: selectedColor };
    newItem.quantity = 1;
    dispatch(addToCart(newItem));
    setIsSelectedProduct((prev) => !prev);
  };

  const changeMood = () => {
    setIsSelectedProduct((prev) => !prev);
  };

  const handleToGoCart = () => {
    navigate('/cart');
  };

  return (
    <div style={{ background: '#ECECEC' }}>
      <div className="container">
        {filteredProduct.map((item) => (
          <div
            style={{ display: 'flex', justifyContent: 'space-around' }}
            key={item.id}
          >
            {item.productImages.map((el) => (
              <StyledSection key={el.id}>
                <img
                  width={308}
                  src={el.image}
                  style={{ marginBottom: '10px' }}
                  alt="img"
                />
                <img
                  width={308}
                  src={el.image}
                  alt="img"
                  style={{ marginBottom: '10px' }}
                />
                <img width={308} src={el.image} alt="img" />
                <img width={308} src={el.image} alt="img" />
              </StyledSection>
            ))}

            <StyledBlock key={item.id}>
              <StyledTitle>{item.title}</StyledTitle>
              <StyledDiv>
                <StyledP>
                  Артикул:<StyledSpan> {item.article}</StyledSpan>
                </StyledP>
                <StyledColordiv>
                  <StyledP>
                    Цвет:
                    {item.colors.map((color) => (
                      <StyledDivColor
                        key={color.id}
                        onClick={() => setSelectedColor(color.color)}
                        style={{
                          backgroundColor: `${color.color}`,
                          position: 'relative',
                        }}
                      >
                        <input
                          onClick={changeMood}
                          style={{
                            opacity: 0,
                            overflow: 'hidden',
                            position: 'absolute',
                          }}
                          className="radio"
                          name="radio"
                          id="radio"
                          type="radio"
                        />
                        <label htmlFor="radio"></label>
                      </StyledDivColor>
                    ))}
                  </StyledP>
                </StyledColordiv>
                <StyledPriceTitle>
                  {item.discount ? (
                    <>
                      <StyledPrice>{item.discount} p</StyledPrice>
                      <span className="previousPrice">
                        {item.previousPrice} p
                      </span>
                    </>
                  ) : (
                    <span>{item.previousPrice} p</span>
                  )}
                </StyledPriceTitle>
                <StyledP>O товаре:</StyledP>
                <StyledDescription>{item.description}</StyledDescription>
                <div
                  style={{
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <StyledP>
                        Размерный ряд:
                        <StyledSpan>{item.sizeRage}</StyledSpan>
                      </StyledP>
                      <StyledP>
                        Состав ткани:
                        <StyledSpan> {item.structure}</StyledSpan>
                      </StyledP>
                    </div>
                    <div style={{ textAlign: 'end' }}>
                      <StyledP>
                        Количество в линейке :
                        <StyledSpan>{item.amountOfLines}</StyledSpan>
                      </StyledP>
                      <StyledP>
                        Материал: <StyledSpan>{item.material}</StyledSpan>
                      </StyledP>
                    </div>
                  </div>
                  <div
                    style={{
                      width: '480px',
                      display: 'flex',
                    }}
                  >
                    {isSelectedProduct ? (
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
                        <StyledAddToBasketText>
                          Перейти в корзину
                        </StyledAddToBasketText>
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
                        <StyledAddToBasketText>
                          Добавить в корзину
                        </StyledAddToBasketText>
                      </Button>
                    )}
                    <div>
                      {!!favoriteItems.length ? (
                        <Button
                          style={{
                            height: '44px',
                            marginRight: 5,
                            backgroundColor: 'black',
                          }}
                        >
                          <HeartSvg
                            fill="white"
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
              </StyledDiv>
            </StyledBlock>
          </div>
        ))}

        <div>
          <StyledTitle style={{ marginTop: 48 }}>Похожие товары</StyledTitle>
          <div style={{ display: 'flex' }}>
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
