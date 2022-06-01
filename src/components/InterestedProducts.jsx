import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Content from '../ui/Content';

const InterestedProducts = () => {
  const product = useSelector((state) => state.products.data);
  const filteredItem = product.filter((item) => item.bestseller);
  const [count, setCount] = useState(5);

  return (
    <div className="container">
      <div>
        <h5>Возможно Вас заинтересует</h5>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {filteredItem.length !== 0 &&
            filteredItem.slice(0, count).map((item) => (
              <div key={item.id} style={{ width: '226px' }}>
                <div>{item.title}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default InterestedProducts;
