import React from 'react';
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
import { mathPercent } from '../../utils';

const StyledColordiv = styled.div`
  display: flex;
`;

const StyledDivColor = styled.div`
  width: 8px;
  height: 8px;
  border: 1px;
  border-radius: 5px;
  margin: 3px 10px;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
`;

const StyledP = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
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
  height: 434px;
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
`;

const StyledPrice = styled.span`
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #393939;
  margin: 10px 0;
`;

const StyledDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 180%;
  color: #6a6a6a;
  margin-top: 6px;
`;

const Product = () => {
  const params = useParams();
  const products = +params.productId;
  const product = useSelector((state) => state.products.data);
  const filteredProduct = product.filter((item) => item.id === products);

  const favoriteItems = useSelector((state) => state.favorite.favoriteItems);

  const dispatch = useDispatch();

  const onAddFavorite = (item) => {
    dispatch(onAddToFavorite(item));
  };

  const onRemoveFavorite = (item) => {
    dispatch(onRemoveFromFavorite(item));
  };

  return (
    <div style={{ background: '#ECECEC' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {filteredProduct.map((item) => (
            <>
              {item.productImages.map((el) => (
                <StyledSection>
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

              <StyledBlock>
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
                          style={{ backgroundColor: `${color.color}` }}
                        ></StyledDivColor>
                      ))}
                    </StyledP>
                  </StyledColordiv>
                  <span>
                    {item.discount ? (
                      <>
                        <StyledPrice>{item.discount}p.</StyledPrice>
                        <span className="previousPrice">
                          {item.previousPrice}p.
                        </span>
                      </>
                    ) : (
                      <span>{item.previousPrice}p.</span>
                    )}
                  </span>
                  <StyledP>O товаре:</StyledP>
                  <StyledDescription>{item.description}</StyledDescription>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                    }}
                  >
                    <StyledP>
                      Размерный ряд: <StyledSpan>{item.sizeRage}</StyledSpan>
                    </StyledP>
                    <StyledP>
                      Состав ткани:<StyledSpan> {item.structure}</StyledSpan>
                    </StyledP>
                    <StyledP>
                      Количество в линейке :
                      <StyledSpan>{item.amountOfLines}</StyledSpan>
                    </StyledP>
                    <StyledP>
                      Материал: <StyledSpan>{item.material}</StyledSpan>
                    </StyledP>
                    <div
                      style={{
                        width: '480px',
                        display: 'flex',
                        marginTop: '12px',
                      }}
                    >
                      <Button
                        style={{
                          width: '418px',
                          marginRight: 5,
                          backgroundColor: 'black',
                        }}
                      >
                        <BasketSvg style={{ marginRight: 5 }} fill="white" />
                        Добавить в корзину
                      </Button>
                      {!!favoriteItems.length ? (
                        <Button>
                          <HeartSvg
                            fill="white"
                            onClick={() => onRemoveFavorite(item)}
                          />
                        </Button>
                      ) : (
                        <Button>
                          <HeartedSvg
                            fill="white"
                            onClick={() => onAddFavorite(item)}
                          />
                        </Button>
                      )}
                    </div>
                  </div>
                </StyledDiv>
              </StyledBlock>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
