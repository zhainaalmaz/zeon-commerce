import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ReactComponent as Heart } from './../../assets/icons/heart1.svg';
import { ReactComponent as Hearted } from './../../assets/icons/heart2.svg';
import Button from '../../ui/Button';

const StyledContainer = styled.div`
  width: 284px;
  height: 536px;
  background: white;
  margin: 8px 4px;
  text-align: start;
  border: 1px solid #f1f1f1;
  position: relative;
`;

const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledDivColor = styled.div`
  width: 8px;
  height: 8px;
  border: 1px;
  border-radius: 5px;
  margin-right: 5px;
  margin-top: 6px;
`;

const StyledP = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #393939;
  margin: 18px 43%;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const StyledTitle = styled.p`
  margin-top: 5px;
  font-size: 14px;
  line-height: 17px;
  color: #393939;
`;

const StyledPricetitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #393939;
`;

const StyledColordiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5px auto;
`;

const StyledSizetitle = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #7c7c7c;
  margin-top: 6px;
`;

const BestSeller = () => {
  const products = useSelector((state) => state.products.data);
  const filteredItem = products.filter((item) => item.bestseller);

  const [count, setCount] = useState(8);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const countClickHandler = () => {
    setCount((count) => count + 4);
  };

  const onClickedFav = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div>
      <StyledP>Хит продаж</StyledP>
      <StyledContent>
        {filteredItem.length !== 0 &&
          filteredItem.slice(0, count).map((item) => (
            <div key={item.id}>
              <StyledContainer>
                <div
                  style={{
                    position: 'absolute',
                    cursor: 'pointer',
                    top: 10,
                    right: 10,
                  }}
                  onClick={onClickedFav}
                >
                  {isFavorite ? <Hearted /> : <Heart />}
                </div>
                <StyledImage
                  src={item.productImages.map((el) => {
                    return el.image;
                  })}
                />
                <div style={{ margin: '8px' }}>
                  <StyledTitle>{item.title}</StyledTitle>
                  <StyledPricetitle style={{ marginTop: '5px' }}>
                    {item.currentPrice} p.
                  </StyledPricetitle>
                  <StyledSizetitle>Размер:{item.sizeRage}</StyledSizetitle>
                  <StyledColordiv>
                    {item.colors.map((color) => (
                      <StyledDivColor
                        key={color.id}
                        style={{ backgroundColor: `${color.color}` }}
                      ></StyledDivColor>
                    ))}
                  </StyledColordiv>
                </div>
              </StyledContainer>
            </div>
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
  );
};

export default BestSeller;
