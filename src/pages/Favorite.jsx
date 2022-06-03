import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Content from '../ui/Content';
import styled from 'styled-components';
import InterestedProducts from '../components/InterestedProducts';

const StyledP = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #393939;
  text-align: start;
  padding-top: 11px;
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
  const product = useSelector((state) => state.products.data);
  const filteredItem = product.filter((item) => item.discount);

  const favoriteItem = useSelector((state) => state.favorite.favoriteItems);
  const [interestPost, setInterestedPost] = useState([]);
  const [count] = useState(5);

  useEffect(() => {
    setInterestedPost(filteredItem);
  }, []);

  return (
    <div className="container">
      <StyledP>Избранное</StyledP>
      {favoriteItem.length > 0 ? (
        <>
          <StyledCountText>
            Товаров в избранном: <span>{favoriteItem.length}</span>
          </StyledCountText>
          <StyledDiv>
            {favoriteItem.map((item) => (
              <Content item={item} key={item.id} />
            ))}
          </StyledDiv>
        </>
      ) : (
        <>
          <StyledText>У Вас пока нет избранных товаров</StyledText>
          <StyledP style={{ marginTop: 48 }}>Возможно Вас заинтересует</StyledP>
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
