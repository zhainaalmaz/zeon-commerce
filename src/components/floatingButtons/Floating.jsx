import React from 'react';
import telegram from '../../assets/icons/telegram1.svg';
import whatsapp from '../../assets/icons/whatsapp2.svg';
import telephone from '../../assets/icons/telephone3.svg';
import cls from './Floating.module.css';
import { useDispatch } from 'react-redux';
import { onChangeOpenDialog } from '../../store/floatingSlice';

const Floating = () => {
  const dispatch = useDispatch();

  const onCloseFloating = () => {
    dispatch(onChangeOpenDialog());
  };

  return (
    <div className={cls.floating_container}>
      <a
        style={{ marginRight: 6 }}
        target="_blank"
        href="https://web.telegram.org/"
        rel="noreferrer"
      >
        <img src={telegram} alt="telegram" />
      </a>
      <a
        style={{ marginRight: 6 }}
        target="_blank"
        href="https://web.whatsapp.com/"
        rel="noreferrer"
      >
        <img src={whatsapp} alt="wa" />
      </a>
      <span className="main-icons" href="">
        <img onClick={onCloseFloating} src={telephone} alt="phone" />
      </span>
    </div>
  );
};

export default Floating;
