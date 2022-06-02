import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Content from './Content';
import styled from 'styled-components';

const StyledP = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #393939;
  text-align: start;
`;
const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CollectionList = () => {
  const params = useParams();
  const collectionParams = +params.collectionList;

  const product = useSelector((state) => state.products.data);
  const collection = useSelector((state) => state.collections.data);
  const collectionName = collection.filter(
    (element) => element.id === collectionParams
  );

  console.log(product, 'product');
  const filteredItem = product.filter(
    (item) => item.collectionId === collectionParams
  );

  return (
    <div className="container">
      <StyledP>{`${collectionName[0]?.title}`}</StyledP>

      <StyledContent>
        {filteredItem.map((item) => (
          <div key={item.id}>
            <Content item={item} />
          </div>
        ))}
      </StyledContent>
    </div>
  );
};

export default CollectionList;
