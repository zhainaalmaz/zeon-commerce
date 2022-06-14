import React, { useState } from 'react';
import styled from 'styled-components';
import { Divider } from '@mui/material';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import ModalForm from '../modal/ModalForm';

import SuccessModal from '../modal/SuccessModal';
import { clearItemsFromCart } from '../../store/cartSlice';
import { useNavigate } from 'react-router-dom';

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

const StyledTotal = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #979797;
`;

const StyledP = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #979797;
`;

const StyledText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  color: #393939;
`;

const StyledDiv = styled.div`
  padding-top: 12px;
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  text-align: center;s
  color: #ffffff;
  gap: 10px;
`;

const CartTotal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const productFromCart = useSelector((state) => state.cart.cartItems);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

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
      (sum += current?.discount
        ? (current?.previousPrice - current?.discount) * current?.quantity
        : 0),
    0
  );

  const totalFinalPrice = totalPrice - totalDiscount;

  const dispatch = useDispatch();

  const showModalHandler = () => {
    setIsModalOpen((prev) => !prev);
  };

  const successHandler = () => {
    console.log('SUCCESS');
    setShowSuccess(true);
  };

  const reDirect = () => {
    navigate('/');
    dispatch(clearItemsFromCart());
  };

  return (
    <div>
      <StyledBlock>
        <div key={productFromCart.id}>
          <StyledTitle>Сумма заказа</StyledTitle>
          <StyledContent>
            <StyledDiv>
              <StyledP>Количество линеек:</StyledP>
              <StyledText>{totalQuantity} шт</StyledText>
            </StyledDiv>
            <StyledDiv>
              <StyledP>Количество товаров::</StyledP>
              <StyledText>{totalAmountOfLines} шт</StyledText>
            </StyledDiv>
            <StyledDiv>
              <StyledP>Стоимость:</StyledP>
              <StyledText>{totalPrice.toLocaleString()} рублей</StyledText>
            </StyledDiv>
            <StyledDiv>
              <StyledP>Скидка:</StyledP>
              <StyledText>{totalDiscount.toLocaleString()} рублей</StyledText>
            </StyledDiv>
            <div style={{ border: '1px dashed grey', margin: '24px 0' }}></div>
            <StyledDiv>
              <StyledTotal>Итого к оплате:</StyledTotal>
              <StyledText>{totalFinalPrice.toLocaleString()} рублей</StyledText>
            </StyledDiv>
          </StyledContent>
          <StyledButton
            style={{ background: 'red' }}
            onClick={() => setIsModalOpen(true)}
          >
            Оформить заказ
          </StyledButton>
          {isModalOpen && (
            <ModalForm
              showModal={showModalHandler}
              data={productFromCart}
              totalFinalPrice={totalFinalPrice}
              successHandler={successHandler}
            />
          )}
          {showSuccess && <SuccessModal onClick={reDirect} />}
        </div>
      </StyledBlock>
    </div>
  );
};

export default CartTotal;
