import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import CollectionCard from './CollectionCard';
import Pagination from '../ui/pagination/Pagination';

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 18px;
  padding-bottom: 16px;
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
  } ;
`;

const StyledTitle = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #393939;
  padding-top: 32px;
  text-align: start;
`;

const Collections = () => {
  const collection = useSelector((state) => state.collections.data);

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 8;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(collection.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(collection.length / itemsPerPage));
  }, [itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % collection.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="container">
      <div style={{ paddingBottom: 49 }}>
        <StyledTitle>Коллекции</StyledTitle>
        <StyledContainer className="container">
          {currentItems.length !== 0 &&
            currentItems.map((item) => (
              <CollectionCard key={item.id} item={item} />
            ))}
        </StyledContainer>
        <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
      </div>
    </div>
  );
};

export default Collections;
