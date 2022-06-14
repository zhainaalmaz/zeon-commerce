import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
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
  // const [data, setData] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [fetching, setFetching] = useState(true);
  // const [totalCount, setTotalCount] = useState(0);

  // useEffect(() => {
  //   // if (fetching) {
  //   console.log('true');
  //   axios('https://zeon-commerce-store-default-rtdb.firebaseio.com/news').then(
  //     (response) => {
  //       console.log(response.data);

  //       // setData({ ...data, ...response.data });
  //       // setCurrentPage((prevState) => prevState + 1);
  //       // setTotalCount(response.headers['x-total-count']);
  //       return response.data;
  //     }
  //   );
  //   // .finally(() => setFetching(false));
  //   // }
  // }, []);

  // useEffect(() => {
  //   axios('https://zeon-commerce-store-default-rtdb.firebaseio.com/news')
  //     .then((response) => {
  //       console.log(response);
  //       return response;
  //     })
  //     .catch((err) => {
  //       console.log('Oh noooo!!');
  //       console.log(err);
  //     });
  // }, []);

  // useEffect(() => {
  //   document.addEventListener('scroll', scrollHandler);
  //   return function () {
  //     document.removeEventListener('scroll', scrollHandler);
  //   };
  // }, []);

  // const scrollHandler = (e) => {
  //   if (
  //     e.target.documentElement.scrollHeight -
  //       (e.target.documentElement.scrollTop + window.innerHeight) >
  //       100 &&
  //     data.length < totalCount
  //   ) {
  //     setFetching(true);
  //   }
  //   console.log('scrollHeight', e.target.documentElement.scrollHeight);
  //   console.log('scrollTop', e.target.documentElement.scrollTop);
  //   console.log('scroll', window.innerHeight);
  // };

  return (
    <div style={{ backgroundColor: '#f8f8f8' }}>
      <div className="container">
        <StyledTitle>Новости </StyledTitle>
        {newsData?.map((item) => {
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
