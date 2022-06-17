import React, { useState } from 'react';
import Button from '../../ui/Button';
import { useSelector } from 'react-redux';
import cls from './CartTotal.module.css';

const CartTotal = ({ setIsModalOpen }) => {
  const productFromCart = useSelector((state) => state.cart.cartItems);
  const [toggle, setToggle] = useState(false);

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

  return (
    <div className={cls.block}>
      <div key={productFromCart.id}>
        <h4 className={cls.title}>Сумма заказа</h4>
        <div className={cls.content}>
          <div className={cls.section}>
            <span className={cls.description}>Количество линеек:</span>
            <span className={cls.text}>{totalQuantity} шт</span>
          </div>
          <div className={cls.section}>
            <span className={cls.description}>Количество товаров:</span>
            <span className={cls.text}>{totalAmountOfLines} шт</span>
          </div>
          <div className={cls.section}>
            <span className={cls.description}>Стоимость:</span>
            <span className={cls.text}>
              {totalPrice.toLocaleString()} рублей
            </span>
          </div>
          <div className={cls.section}>
            <span className={cls.description}>Скидка:</span>
            <span className={cls.text}>
              {totalDiscount.toLocaleString()} рублей
            </span>
          </div>
          <div style={{ border: '1px dashed #BFBFBF', margin: '24px 0' }}></div>
          <div className={cls.section}>
            <span className={cls.total}>Итого к оплате:</span>
            <span className={cls.text}>
              {totalFinalPrice.toLocaleString()} рублей
            </span>
          </div>
        </div>

        <div className={cls.cart_mobile}>
          {!toggle && (
            <>
              <div className={cls.mobile_wrapper}>
                <span className={cls.mobile_title}>Общее количество: </span>
                <span
                  className={cls.mobile_text}
                >{`${totalQuantity} линеек (${totalAmountOfLines}шт.)`}</span>
              </div>
              <div className={cls.mobile_wrapper}>
                <span className={cls.mobile_title}>Стоимость: </span>
                <span className={cls.mobile_text}>
                  {totalPrice.toLocaleString()} рублей
                </span>
              </div>
              <div className={cls.mobile_wrapper}>
                <span className={cls.mobile_title}>Скидка: </span>
                <span className={cls.mobile_text}>
                  {totalDiscount.toLocaleString()} рублей
                </span>
              </div>
              <div
                style={{
                  border: '1px dashed #BFBFBF',
                  margin: '24px 0',
                  width: '288px',
                }}
              ></div>
            </>
          )}
          <div className={cls.mobile_wrapper}>
            <span className={cls.mobile_title}>Итого: </span>
            <span className={cls.mobile_text}>
              {totalFinalPrice.toLocaleString()} рублей
            </span>
          </div>

          <div className={cls.toggle_button} onClick={() => setToggle(!toggle)}>
            {toggle ? 'Информация о заказе' : 'Скрыть'}
          </div>
        </div>

        <div className={cls.order_button}>
          <Button
            className={cls.button}
            style={{ background: 'red' }}
            onClick={() => setIsModalOpen(true)}
          >
            Оформить заказ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
