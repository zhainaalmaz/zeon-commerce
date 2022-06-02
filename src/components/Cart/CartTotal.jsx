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
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #393939;
  text-align: start;
`;
const CartTotal = () => {
  return (
    <div>
      <StyledBlock>
        <StyledTitle>Сумма заказа</StyledTitle>
        <div>
          <p>Количество линеек:</p>
          <p> ...шт</p>
        </div>
        <div>
          <p>Количество товаров::</p>
          <p> ...шт</p>
        </div>
        <div>
          <p>Стоимость:</p>
          <p> ...рублей</p>
        </div>
        <div>
          <p>Скидка:</p>
          <p>...рублей</p>
        </div>
        <Divider />
        <div>
          <p>Итого к оплате:</p>
          <p>...рублей</p>
        </div>
        <Button>Оформить заказ</Button>
      </StyledBlock>
    </div>
  );
};

export default CartTotal;
