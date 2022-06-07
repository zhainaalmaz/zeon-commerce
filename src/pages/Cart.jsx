import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import InterestedProducts from '../components/InterestedProducts';
import CartItem from '../components/Cart/CartItem';
import CartTotal from '../components/Cart/CartTotal';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 16px;
`;
const StyledTitle = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #393939;
  text-align: start;
  padding-top: 14px;
`;

const StyledText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #393939;
  text-align: start;
  padding: 45px 0;
`;

const StyledP = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #393939;
  text-align: start;
  margin-top: 11px;
`;

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  const product = useSelector((state) => state.products.data);
  const filteredItem = product.filter((item) => item.discount);

  const [interestPost, setInterestedPost] = useState([]);
  const [count] = useState(5);

  useEffect(() => {
    setInterestedPost(filteredItem);
  }, []);

  return (
    <div className="container">
      <StyledTitle>Корзина</StyledTitle>
      {!cartProducts || cartProducts?.cartItems?.length < 1 ? (
        <>
          <StyledText>У Вас пока нет товаров в корзине</StyledText>
          <StyledP style={{ marginTop: 48 }}>Возможно Вас заинтересует</StyledP>
          <div style={{ display: 'flex' }}>
            {interestPost.slice(0, count).map((item) => (
              <InterestedProducts key={item.id} item={item} />
            ))}
          </div>
        </>
      ) : (
        <div>
          <StyledContainer>
            <div>
              {cartProducts?.cartItems?.map((item) => (
                <div key={item?.id + item?.selectColor}>
                  <CartItem item={item} />
                </div>
              ))}
            </div>
            <CartTotal />
          </StyledContainer>
        </div>
      )}
    </div>
  );
};

export default Cart;
