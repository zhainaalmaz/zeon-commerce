import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from '../../ui/Button';

const StyledP = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #393939;
  margin-top: 18px;
`;

const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; ;
`;

const StyledContainer = styled.div`
  width: 284px;
  height: 536px;
  background: white;
  margin: 8px 4px;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const StyledTitle = styled.p`
  // margin-top: 5px;
  margin: 8px 4px;
  font-size: 14px;
  line-height: 17px;
  text-align: start;
  // text-align: justify;
  color: #393939;
`;

const StyledColordiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px auto;
`;

const StyledDivColor = styled.div`
  width: 8px;
  height: 8px;
  border: 1px;
  border-radius: 5px;
  margin-right: 5px;
`;

const NewProducts = () => {
  const products = useSelector((state) => state.products.data);

  const filteredItem = products.filter((item) => item.newproducts);
  const [count, setCount] = useState(4);

  const countClickHandler = () => {
    setCount((count) => count + 4);
  };

  return (
    <div>
      <div>
        <StyledP>Новинки</StyledP>
        <StyledContent>
          {filteredItem.length !== 0 &&
            filteredItem.slice(0, count).map((item) => (
              <StyledContainer key={item.id} style={{ width: '284px' }}>
                {item.productImages.map((el) => (
                  <StyledImage key={el.id} src={el.image} alt="newproductImg" />
                ))}
                <StyledTitle>{item.title}</StyledTitle>
                <StyledTitle>{item.previousPrice}</StyledTitle>
                <StyledTitle>{item.sizeRage}</StyledTitle>
                <StyledColordiv>
                  {item.colors.map((color) => (
                    <StyledDivColor
                      style={{ backgroundColor: `${color.color}` }}
                    ></StyledDivColor>
                  ))}
                </StyledColordiv>
              </StyledContainer>
            ))}
        </StyledContent>
        {filteredItem.length <= count || (
          <Button
            sx={{
              background: 'black',
              width: '107px',
              height: '32px',
              color: 'white',
              marginTop: '16px',
            }}
            onClick={countClickHandler}
          >
            Еще
          </Button>
        )}
      </div>
    </div>
  );
};

export default NewProducts;
