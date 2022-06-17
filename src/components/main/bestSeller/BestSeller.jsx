import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../../ui/Button';
import Content from '../../../ui/content/Content';
import cls from './BestSeller.module.css';

const BestSeller = () => {
  const products = useSelector((state) => state.products.data);
  const filteredItem = products.filter((item) => item.bestseller);

  const [count, setCount] = useState(8);

  const countClickHandler = () => {
    setCount((count) => count + 4);
  };

  return (
    <>
      <h5 className={cls.title}>Хит продаж</h5>
      <section className={cls.content}>
        {filteredItem.length !== 0 &&
          filteredItem.slice(0, count).map((item) => (
            <div key={item.id}>
              <Content item={item} />
            </div>
          ))}
      </section>
      <div className="hide_button">
        {filteredItem.length <= count || (
          <Button className={cls.button} onClick={countClickHandler}>
            Еще
          </Button>
        )}
      </div>
    </>
  );
};

export default BestSeller;
