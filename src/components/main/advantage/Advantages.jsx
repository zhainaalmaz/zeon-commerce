import React from 'react';
import { useSelector } from 'react-redux';
import cls from './Advantages.module.css';

const Advantages = () => {
  const advantage = useSelector((state) => state.commerce.data.advantages);

  return (
    <>
      <div className={cls.wrapper}>
        <h4 className={cls.main_title}>Наши преимущества</h4>
        <section className={cls.container}>
          {advantage?.map((item) => (
            <div className={cls.content} key={item.id}>
              <div className={cls.main}>
                <img src={item.image} alt="/" />
                <h5 className={cls.title}>{item.title}</h5>
                <p className={cls.text}>{item.text}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Advantages;
