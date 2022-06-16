import { React } from 'react';
import {
  removeFromCart,
  increaseItem,
  decreaseItem,
} from '../../store/cartSlice';
import { useDispatch } from 'react-redux';
import { ReactComponent as RemoveItemSvg } from '../../assets/icons/delete.svg';
import cls from './CartItem.module.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCArtHandler = () => {
    dispatch(removeFromCart(item));
  };

  const increaseItemHandler = () => {
    dispatch(increaseItem(item));
  };

  const decreaseItemHandler = () => {
    dispatch(decreaseItem(item));
  };

  return (
    <div className={cls.container}>
      <div className={cls.content}>
        <div className={cls.section}>
          <img
            src={item?.productImages.map((el) => {
              return el.image;
            })}
            alt="/"
          />

          <div className={cls.block}>
            <h4 className={cls.title}>{item?.title}</h4>
            <div style={{ marginTop: 8, textAlign: 'start', gap: '6px' }}>
              <p className={cls.size}>Размер: {item?.sizeRage}</p>
              <div className={cls.colors}>
                Цвет:
                <div
                  className={cls.color}
                  style={{ backgroundColor: `${item?.selectColor}` }}
                ></div>
              </div>
              <p className={cls.price} style={{ marginTop: '5px' }}>
                <span>
                  {item?.discount ? (
                    <>
                      <span>{item?.discount.toLocaleString()}p. </span>
                      <span className="previousPrice">
                        {item?.previousPrice.toLocaleString()}p.
                      </span>
                    </>
                  ) : (
                    <span>{item?.previousPrice.toLocaleString()}p.</span>
                  )}
                </span>
              </p>
            </div>
            <div className={cls.buttons}>
              <button onClick={() => decreaseItemHandler(item)}>-</button>

              <span className={cls.quantity}>{item?.quantity}</span>
              <button onClick={() => increaseItemHandler(item)}>+</button>
            </div>
          </div>
        </div>
        <div className={cls.removeIcon}>
          <RemoveItemSvg onClick={removeFromCArtHandler} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
