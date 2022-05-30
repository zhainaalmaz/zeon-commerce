import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ReactComponent as Heart } from '../assets/icons/heart1.svg';
import { ReactComponent as Hearted } from '../assets/icons/heart2.svg';
import { onAddToFavorite, onRemoveFromFavorite } from '../store/favoriteSlice';

const StyledContainer = styled.div`
  width: 284px;
  height: 536px;
  background: white;
  margin: 8px 4px;
  text-align: start;
  border: 1px solid #f1f1f1;
  position: relative;
`;

const StyledDivColor = styled.div`
  width: 8px;
  height: 8px;
  border: 1px;
  border-radius: 5px;
  margin-right: 5px;
  margin-top: 6px;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const StyledTitle = styled.p`
  margin-top: 5px;
  font-size: 14px;
  line-height: 17px;
  color: #393939;
`;

const StyledPricetitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #393939;
`;

const StyledColordiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px auto;
`;

const StyledSizetitle = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #7c7c7c;
  margin-top: 6px;
`;

const Content = ({ item }) => {
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
    <div>
      <StyledContainer>
        <div
          style={{
            position: 'absolute',
            cursor: 'pointer',
            top: 10,
            right: 10,
          }}
        >
          {!filteredFev && (
            <Hearted role="presentation" onClick={() => onAddFavorite(item)} />
          )}
          {!!filteredFev && <Heart onClick={() => onRemoveFavorite(item)} />}
        </div>
        <StyledImage
          src={item.productImages.map((el) => {
            return el.image;
          })}
        />
        <div style={{ margin: '8px' }}>
          <StyledTitle>{item.title}</StyledTitle>
          <StyledPricetitle style={{ marginTop: '5px' }}>
            {item.currentPrice} p.
          </StyledPricetitle>
          <StyledSizetitle>Размер:{item.sizeRage}</StyledSizetitle>
          <StyledColordiv>
            {item.colors.map((color) => (
              <StyledDivColor
                key={color.id}
                style={{ backgroundColor: `${color.color}` }}
              ></StyledDivColor>
            ))}
          </StyledColordiv>
        </div>
      </StyledContainer>
    </div>
  );
};

export default Content;
