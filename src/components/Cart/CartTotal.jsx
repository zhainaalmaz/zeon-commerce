import React, { useState } from 'react';
import styled from 'styled-components';
import { Divider } from '@mui/material';
import Button from '../../ui/Button';
import { useSelector } from 'react-redux';
import ModalForm from '../modal/ModalForm';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const productFromCart = useSelector((state) => state.cart.cartItems);

  const totalQuantity = productFromCart.reduce((sum, current) => {
    return sum + current?.quantity;
  }, 0);

  const totalAmountOfLines = productFromCart.reduce((sum, current) => {
    return sum + current?.amountOfLines * current?.quantity;
  }, 0);

  const totalPrice = productFromCart?.reduce((sum, current) => {
    return sum + current?.previousPrice * current?.quantity;
  }, 0);

  const totalDiscount = productFromCart?.reduce(
    (sum, current) =>
      (sum += current.discount
        ? (current?.previousPrice - current?.discount) * current?.quantity
        : 0),
    0
  );

  const totalFinalPrice = totalPrice - totalDiscount;

  const showModalHandler = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <div>
      <StyledBlock>
        <div key={productFromCart.id}>
          <StyledTitle>Сумма заказа</StyledTitle>
          <StyledContent>
            <div>
              <StyledP>Количество линеек:</StyledP>
              <StyledText>{totalQuantity} шт</StyledText>
            </div>
            <div>
              <StyledP>Количество товаров::</StyledP>
              <StyledText>{totalAmountOfLines} шт</StyledText>
            </div>
            <div>
              <StyledP>Стоимость:</StyledP>
              <StyledText>{totalPrice}рублей</StyledText>
            </div>
            <div>
              <StyledP>Скидка:</StyledP>
              <StyledText>{totalDiscount}рублей</StyledText>
            </div>
            <Divider />
            <div>
              <StyledTotal>Итого к оплате:</StyledTotal>
              <StyledText>{totalFinalPrice}рублей</StyledText>
            </div>
          </StyledContent>
          <Button
            style={{ background: 'red', width: '100%' }}
            onClick={() => setIsModalOpen(true)}
          >
            Оформить заказ
          </Button>
          {isModalOpen ? <ModalForm showModal={showModalHandler} /> : ''}
        </div>
      </StyledBlock>
    </div>
  );
};

export default CartTotal;
