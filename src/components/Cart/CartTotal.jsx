import React, { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import ModalForm from '../modal/ModalForm';
import SuccessModal from '../modal/SuccessModal';
import { clearItemsFromCart } from '../../store/cartSlice';
import { useNavigate } from 'react-router-dom';
import cls from './CartTotal.module.css';

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
    <div className={cls.block}>
      <div key={productFromCart.id}>
        <h4 className={cls.title}>Сумма заказа</h4>
        <div className={cls.content}>
          <div className={cls.section}>
            <p className={cls.description}>Количество линеек:</p>
            <p className={cls.text}>{totalQuantity} шт</p>
          </div>
          <div className={cls.section}>
            <p className={cls.description}>Количество товаров:</p>
            <p className={cls.text}>{totalAmountOfLines} шт</p>
          </div>
          <div className={cls.section}>
            <p className={cls.description}>Стоимость:</p>
            <p className={cls.text}>{totalPrice.toLocaleString()} рублей</p>
          </div>
          <div className={cls.section}>
            <p className={cls.description}>Скидка:</p>
            <p className={cls.text}>{totalDiscount.toLocaleString()} рублей</p>
          </div>
          <div style={{ border: '1px dashed #BFBFBF', margin: '24px 0' }}></div>
          <div className={cls.section}>
            <p className={cls.total}>Итого к оплате:</p>
            <p className={cls.text}>
              {totalFinalPrice.toLocaleString()} рублей
            </p>
          </div>
        </div>
        <Button
          className={cls.button}
          style={{ background: 'red' }}
          onClick={() => setIsModalOpen(true)}
        >
          Оформить заказ
        </Button>
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
    </div>
  );
};

export default CartTotal;
