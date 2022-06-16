import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import InterestedProducts from '../../components/interestedProducts/InterestedProducts';
import CartItem from '../../components/Cart/CartItem';
import CartTotal from '../../components/Cart/CartTotal';
import cls from './Cart.module.css';

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
      <h4 className={cls.title}>Корзина</h4>
      {!cartProducts || cartProducts?.cartItems?.length < 1 ? (
        <>
          <p className={cls.text}>У Вас пока нет товаров в корзине</p>
          <p className={cls.interestedTitle}>Возможно Вас заинтересует</p>
          <div className={cls.interestedProducts}>
            {interestPost.slice(0, count).map((item) => (
              <InterestedProducts key={item.id} item={item} />
            ))}
          </div>
        </>
      ) : (
        <div>
          <div className={cls.container}>
            <div>
              {cartProducts?.cartItems?.map((item) => (
                <div key={item?.id + item?.selectColor}>
                  <CartItem item={item} />
                </div>
              ))}
            </div>
            <div className={cls.content}>
              <CartTotal />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
