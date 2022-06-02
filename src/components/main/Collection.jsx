import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CollectionCard from '../../pages/CollectionCard';
import Button from '../../ui/Button';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 18px;
`;

const StyledTitle = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #393939;
  // text-align: start;
  padding-top: 32px;
`;

const Collection = () => {
  const collection = useSelector((state) => state.collections.data);
  const [count, setCount] = useState(4);

  const countClickHandler = () => {
    setCount((count) => count + 4);
  };

  return (
    <div className="container">
      <StyledTitle>Коллекции</StyledTitle>
      <StyledContainer className="container">
        {collection.length !== 0 &&
          collection
            .slice(0, count)
            .map((item) => <CollectionCard key={item.id} item={item} />)}
      </StyledContainer>

      {collection.length <= count || (
        <Button
          sx={{
            width: '107px',
            height: '32px',
            marginTop: '16px',
          }}
          size="small"
          onClick={countClickHandler}
        >
          Еще
        </Button>
      )}
    </div>
  );
};

export default Collection;
