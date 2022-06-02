import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import CartItem from '../components/Cart/CartItem';
import CartTotal from '../components/Cart/CartTotal';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <div className="container">
      {cartProducts.cartItems.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <div>
          <StyledContainer>
            <div>
              {cartProducts.cartItems.map((item) => (
                <>
                  <div>
                    <CartItem item={item} />
                  </div>
                </>
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
