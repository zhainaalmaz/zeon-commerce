import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin-top: 56px;
  padding-bottom: 67px;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledContent = styled.div`
  padding: 24px;
  gap: 10px;
  width: 286px;
  height: 248px;
  background: #ffffff;
`;

const StyledMain = styled.main`
  height: 175px;
`;

const StyledTitle = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #393939;
  margin-top: 28px;
`;

const StyledText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 175%;
  text-align: center;
  letter-spacing: 0.04em;
  color: #979797;
`;

const StyledT = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #393939;
`;

const Advantages = () => {
  const advantage = useSelector((state) => state.commerce.data.advantages);

  return (
    <>
      <StyledWrapper>
        <StyledT>Наши преимущества</StyledT>
        <StyledContainer>
          {advantage?.map((item) => (
            <StyledContent key={item.id}>
              <StyledMain>
                <img src={item.image} alt="/" />
                <StyledTitle>{item.title}</StyledTitle>
                <StyledText>{item.text}</StyledText>
              </StyledMain>
            </StyledContent>
          ))}
        </StyledContainer>
      </StyledWrapper>
    </>
  );
};

export default Advantages;
