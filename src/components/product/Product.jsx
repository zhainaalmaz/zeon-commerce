import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Product = () => {
  const params = useParams();
  const products = +params.productId;
  const product = useSelector((state) => state.products.data);
  const filteredProduct = product.filter((item) => item.id === products);

  return (
    <div>
      {filteredProduct.map((item) => (
        <div>
          <div>{item.title}</div>
          <div>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
