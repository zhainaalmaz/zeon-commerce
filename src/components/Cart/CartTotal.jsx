import React from 'react';
import styled from 'styled-components';
import { Divider } from '@mui/material';
import Button from '../../ui/Button';

const StyledBlock = styled.div`
  width: 384px;
  height: 311px;
  background: white;
  padding: 20px;
  margin-top: 11px;
`;

const StyledTitle = styled.p`
  text-align: start;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #393939;
  padding-bottom: 4px;
`;

const StyledContent = styled.div`
  gap: 12px;
  width: 336px;
  // height: 104px;
  text-align: start;
`;

const StyledP = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #979797;
  padding-top: 12px;
`;

const StyledTotal = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #979797;
  padding-top: 12px;
`;

const StyledText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #393939;
`;

const CartTotal = () => {
  return (
    <div>
      <StyledBlock>
        <StyledTitle>Сумма заказа</StyledTitle>
        <StyledContent>
          <div>
            <StyledP>Количество линеек:</StyledP>
            <StyledText> ...шт</StyledText>
          </div>
          <div>
            <StyledP>Количество товаров::</StyledP>
            <StyledText> ...шт</StyledText>
          </div>
          <div>
            <StyledP>Стоимость:</StyledP>
            <StyledText> ...рублей</StyledText>
          </div>
          <div>
            <StyledP>Скидка:</StyledP>
            <StyledText>...рублей</StyledText>
          </div>
          <Divider />
          <div>
            <StyledTotal>Итого к оплате:</StyledTotal>
            <StyledText>...рублей</StyledText>
          </div>
        </StyledContent>
        <Button style={{ background: 'red', width: '100%' }}>
          Оформить заказ
        </Button>
      </StyledBlock>
    </div>
  );
};

export default CartTotal;
