import React from 'react';
import { useSelector } from 'react-redux';
import cls from './Offerts.module.css';

const Offerts = () => {
  const commerce = useSelector((state) => state.commerce.data.publicOffert);

  return (
    <div className="container">
      <div className={cls.container}>
        <h5 className={cls.title}>Публичная оферта </h5>
        <h6 className={cls.text}>{commerce.text}</h6>
      </div>
    </div>
  );
};

export default Offerts;
