import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from '../../ui/Button';
import Content from '../../ui/Content';

const StyledP = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #393939;
  margin-top: 44px;
`;

const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 18px;
`;

const NewProducts = () => {
  const products = useSelector((state) => state.products.data);

  const filteredItem = products.filter((item) => item.newproducts);
  const [count, setCount] = useState(4);

  const countClickHandler = () => {
    setCount((count) => count + 4);
  };

  return (
    <>
      <StyledP>Новинки</StyledP>
      <StyledContent>
        {filteredItem.length !== 0 &&
          filteredItem.slice(0, count).map((item) => (
            <div key={item.id}>
              <Content item={item} />
            </div>
          ))}
      </StyledContent>

      {filteredItem.length <= count || (
        <Button
          sx={{
            width: '107px',
            height: '32px',
            marginTop: '16px',
            cursor: 'pointer',
          }}
          onClick={countClickHandler}
        >
          Еще
        </Button>
      )}
    </>
  );
};

export default NewProducts;
