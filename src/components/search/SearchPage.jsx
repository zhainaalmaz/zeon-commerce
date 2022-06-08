import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Content from '../../ui/Content';
import styled from 'styled-components';
import InterestedProducts from '../InterestedProducts';

const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 18px;
  padding-bottom: 64px;
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
  } ;
`;

const StyledP = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #393939;
  text-align: start;
  padding-top: 11px;
`;

const StyledSpan = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #393939;
`;

const StyledText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #393939;
  padding-top: 16px;
`;

const SearchPage = () => {
  const products = useSelector((state) => state.products.data);
  const filteredItem = products.filter((item) => item.discount);

  const [interestPost, setInterestedPost] = useState([]);
  const [count] = useState(5);

  const params = useParams();
  const searchItemParams = params.inputEntered;

  const filterResult = products.filter((value) => {
    return value.title.toLowerCase().includes(searchItemParams.toLowerCase());
  });

  useEffect(() => {
    setInterestedPost(filteredItem);
  }, []);

  return (
    <div className="container">
      {filterResult.length === 0 ? (
        <div style={{ textAlign: 'start', paddingTop: '11px' }}>
          <StyledSpan>
            Результаты поиска по запросу: {searchItemParams}
          </StyledSpan>
          <StyledText>По Вашему запросу ничего не найдено.</StyledText>
          <StyledP style={{ marginTop: 48 }}>Возможно Вас заинтересует</StyledP>
          <div style={{ display: 'flex' }}>
            {interestPost.slice(0, count).map((item) => (
              <InterestedProducts key={item.id} item={item} />
            ))}
          </div>
        </div>
      ) : (
        <>
          <div style={{ textAlign: 'start', paddingTop: '11px' }}>
            <StyledSpan>
              Результаты поиска по запросу: {searchItemParams}
            </StyledSpan>
          </div>
          <StyledContent>
            {filterResult.map((item) => (
              <div>
                <Content item={item} />
              </div>
            ))}
          </StyledContent>
        </>
      )}
    </div>
  );
};

export default SearchPage;
