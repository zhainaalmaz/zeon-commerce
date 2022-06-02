import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledContainer = styled.div`
  display: flex;
  background: white;
  box-sizing: border-box;
  padding: 15px;
  margin-bottom: 10px;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.02);
`;

const StyledDiv = styled.div`
  margin: 16px;
  text-align: start;
`;

const StyledSpan = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: #393939;
`;

const StyledP = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 165%;
`;

const StyledTitle = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  color: #393939;
  margin-bottom: 21px;
  padding-top: 8px;
`;
const News = () => {
  const newsData = useSelector((state) => state.commerce.data.news);

  return (
    <div style={{ background: '#ECECEC' }}>
      <div className="container">
        <StyledTitle>Новости </StyledTitle>
        {newsData.map((item) => {
          return (
            <StyledContainer key={item.id}>
              <img width={226} src={item.image} alt="newsImg" />
              <StyledDiv>
                <StyledSpan>{item.title}</StyledSpan>
                <StyledP>{item.description}</StyledP>
              </StyledDiv>
            </StyledContainer>
          );
        })}
      </div>
    </div>
  );
};

export default News;
