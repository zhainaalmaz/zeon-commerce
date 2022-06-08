import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledContainer = styled.div`
  text-align: start;
`;

const StyledTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  color: #393939;
  padding-top: 11px;
`;

const StyledText = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 165%;
  color: #5b5b5b;
  padding-top: 18px;
`;

const Offerts = () => {
  const commerce = useSelector((state) => state.commerce.data.publicOffert);

  return (
    <div className="container">
      <StyledContainer>
        <StyledTitle>Публичная оферта </StyledTitle>
        <StyledText>{commerce.text}</StyledText>
      </StyledContainer>
    </div>
  );
};

export default Offerts;
