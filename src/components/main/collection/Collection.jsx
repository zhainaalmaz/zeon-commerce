import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CollectionCard from '../../../pages/collections/collectionCard/CollectionCard';
import Button from '../../../ui/Button';
import cls from './Collection.module.css';

const Collection = () => {
  const collection = useSelector((state) => state.collections.data);
  const [count, setCount] = useState(4);

  const countClickHandler = () => {
    setCount((count) => count + 4);
  };

  return (
    <div className="container">
      <h5 className={cls.title}>Коллекции</h5>
      <div className="container">
        <section className={cls.container}>
          {collection?.length !== 0 &&
            collection
              ?.slice(0, count)
              .map((item) => <CollectionCard key={item.id} item={item} />)}
        </section>
      </div>

      <div className="hide_button">
        {collection?.length <= count || (
          <Button
            sx={{
              width: '107px',
              height: '32px',
              marginTop: '16px',
              cursor: 'pointer',
            }}
            size="small"
            onClick={countClickHandler}
          >
            Еще
          </Button>
        )}
      </div>
    </div>
  );
};

export default Collection;
