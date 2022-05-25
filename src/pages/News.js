import React, { useState, useEffect } from 'react';
import { getNewsRequest } from '../api/service';
import styled from 'styled-components';

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
`;

const StyledSpan = styled.span`
  font-weight: 500;
  font-size: 16px;
  margin: 0;
  color: #393939;
`;

const StyledP = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 165%;
`;
const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const newsResponse = await getNewsRequest();
        console.log(newsResponse);
        setNews(newsResponse.data.news);
      } catch (error) {
        console.log(error);
      }
    };
    getNews();
  }, []);

  return (
    <div>
      {news.map((item) => {
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
  );
};

export default News;
