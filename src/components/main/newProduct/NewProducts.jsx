import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../../ui/Button';
import Content from '../../../ui/content/Content';
import cls from './NewProducts.module.css';

const NewProducts = () => {
  const products = useSelector((state) => state.products.data);

  const filteredItem = products.filter((item) => item.newproducts);
  const [count, setCount] = useState(4);

  const countClickHandler = () => {
    setCount((count) => count + 4);
  };

  return (
    <>
      <h5 className={cls.title}>Новинки</h5>
      <section className={cls.content}>
        {filteredItem.length !== 0 &&
          filteredItem.slice(0, count).map((item) => (
            <div key={item.id}>
              <Content item={item} />
            </div>
          ))}
      </section>

      {filteredItem.length <= count || (
        <Button
          sx={{
            width: '107px',
            height: '32px',
            marginTop: '16px',
            cursor: 'pointer',
          }}
          onClick={countClickHandler}
        >
          Еще
        </Button>
      )}
    </>
  );
};

export default NewProducts;
