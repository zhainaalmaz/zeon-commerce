import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Content from '../ui/Content';
import styled from 'styled-components';
import BestSeller from '../components/main/BestSeller';
import InterestedProducts from '../components/InterestedProducts';

const StyledP = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #393939;
  text-align: start;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 16px;
`;

const StyledText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #393939;
  text-align: start;
  margin-top: 16px;
`;

const StyledCountText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #979797;
  text-align: start;
  margin-top: 12px;
`;

const Favorite = () => {
  const favoriteItem = useSelector((state) => state.favorite.favoriteItems);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(favoriteItem);
  }, [favoriteItem]);

  return (
    <div className="container">
      <StyledP>Избранное</StyledP>
      {items.length > 0 ? (
        <StyledCountText>
          Товаров в избранном: <span>{items.length}</span>
        </StyledCountText>
      ) : (
        <StyledText>У Вас пока нет избранных товаров</StyledText>
      )}
      <StyledDiv>
        {favoriteItem.map((item) => (
          <Content item={item} />
        ))}
      </StyledDiv>
      {items.length === 0 && <InterestedProducts />}
    </div>
  );
};

export default Favorite;
