import React from 'react';
import { useSelector } from 'react-redux';
import Content from '../ui/Content';
import styled from 'styled-components';

const StyledP = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #393939;
  margin: 18px 43%;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Favorite = () => {
  const favoriteItem = useSelector((state) => state.favorite.favoriteItems);

  return (
    <div className="container">
      <StyledP>Избранное</StyledP>
      <StyledDiv>
        {favoriteItem.map((item) => (
          <Content item={item} />
        ))}
      </StyledDiv>
    </div>
  );
};

export default Favorite;
