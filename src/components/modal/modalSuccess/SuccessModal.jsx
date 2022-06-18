import React from 'react';
import { ReactComponent as SuccessOrder } from '../../../assets/icons/check.svg';
import Button from '../../../ui/Button';
import cls from './SuccessModal.module.css';

const SuccessModal = ({ onClose, setOpen }) => {
  const screenWidth = window.innerWidth;
  const redirect = () => {
    onClose();
    if (screenWidth > 320) {
      setOpen();
    }
  };

  return (
    <div className={cls.layout}>
      <div className={cls.content}>
        <div className={cls.success_icon}>
          <SuccessOrder />
        </div>

        <h5 className={cls.title}>Спасибо!</h5>
        <p className={cls.text}>
          Ваша заявка была принята ожидайте,
          <br /> скоро Вам перезвонят
        </p>
        <Button
          className={cls.success_button}
          style={{ width: '100%', background: 'black' }}
          onClick={redirect}
        >
          Продолжить покупки
        </Button>
      </div>
    </div>
  );
};

export default SuccessModal;
