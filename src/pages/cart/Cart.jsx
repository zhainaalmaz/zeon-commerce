import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InterestedProducts from '../../components/interestedProducts/InterestedProducts';
import CartItem from '../../components/Cart/CartItem';
import CartTotal from '../../components/Cart/CartTotal';
import cls from './Cart.module.css';
import ModalForm from '../../components/modal/modalForm/ModalForm';
import SuccessModal from '../../components/modal/modalSuccess/SuccessModal';
import { useNavigate } from 'react-router-dom';
import { clearItemsFromCart } from '../../store/cartSlice';
import { asyncUpdateBreadcrumb } from '../../store/breadCrumbsSlice';
import Modal from '../../ui/modalWindow/ModalWindow';

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  const product = useSelector((state) => state.products.data);
  const filteredItem = product.filter((item) => item.discount);

  const [interestPost, setInterestedPost] = useState([]);
  const [count] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const productFromCart = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    setInterestedPost(filteredItem);
  }, []);

  const showModalHandler = () => {
    setIsModalOpen((prev) => !prev);
  };

  const successHandler = () => {
    setShowSuccess(true);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const reDirect = () => {
    showModalHandler();
    navigate('/');
    dispatch(clearItemsFromCart());
  };

  const sendBreadCrumbsHandler = () => {
    const breadCrumbs = [
      {
        route_name: 'Главное',
        route: '/',
      },
      {
        route_name: 'Корзина',
      },
    ];
    dispatch(asyncUpdateBreadcrumb(breadCrumbs));
  };

  useEffect(() => {
    sendBreadCrumbsHandler();
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
        <div className={cls.container}>
          <div>
            {cartProducts?.cartItems?.map((item) => (
              <div key={item?.id + item?.selectColor}>
                <CartItem item={item} />
              </div>
            ))}
          </div>
          <div className={cls.content}>
            <CartTotal setIsModalOpen={setIsModalOpen} />
          </div>
        </div>
      )}

      {isModalOpen && (
        <Modal onClose={showModalHandler}>
          <ModalForm
            showModal={showModalHandler}
            data={productFromCart}
            successHandler={successHandler}
          />
        </Modal>
      )}

      {showSuccess && (
        <Modal onClose={showModalHandler}>
          <SuccessModal onClose={reDirect} />
        </Modal>
      )}
    </div>
  );
};

export default Cart;
