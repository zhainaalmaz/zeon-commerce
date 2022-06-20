import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import CollectionCard from './collectionCard/CollectionCard';
import Pagination from '../../ui/pagination/Pagination';
import { asyncUpdateBreadcrumb } from '../../store/breadCrumbsSlice';

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
  @media all and (max-width: 320px) {
    padding-left: 16px;
  }
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
  const dispatch = useDispatch();

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % collection.length;
    setItemOffset(newOffset);
  };

  const sendBreadCrumbsHandler = () => {
    const breadCrumbs = [
      {
        route_name: 'Главное',
        route: '/',
      },
      {
        route_name: 'Коллекции',
      },
    ];
    dispatch(asyncUpdateBreadcrumb(breadCrumbs));
  };

  useEffect(() => {
    sendBreadCrumbsHandler();
  }, []);

  return (
    <div className="container">
      <div style={{ paddingBottom: 49 }}>
        <StyledTitle>Коллекции</StyledTitle>
        <StyledContainer className="container">
          {currentItems.length !== 0 &&
            currentItems.map((item) => {
              return <CollectionCard key={item.id} item={item} />;
            })}
        </StyledContainer>
        <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
      </div>
    </div>
  );
};

export default Collections;
