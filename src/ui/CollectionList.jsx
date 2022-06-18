import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Content from './content/Content';
import styled from 'styled-components';
import InterestedProducts from '../components/interestedProducts/InterestedProducts';
import Collections from '../pages/collections/Collections';
import { asyncUpdateBreadcrumb } from '../store/breadCrumbsSlice';

const StyledP = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #393939;
  text-align: start;
  padding-top: 36px;
`;
const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 18px;
  padding-bottom: 16px;
`;

const StyledTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #393939;
  text-align: center;
`;

const CollectionList = () => {
  const dispatch = useDispatch();
  const { collectionList } = useParams();
  const collectionParams = +collectionList;

  const product = useSelector((state) => state.products.data);
  const collection = useSelector((state) => state.collections.data);
  const breadcrumbs = useSelector((state) => state.bread.breadCrumbsData);

  const collectionName = collection.filter(
    (element) => element.id === collectionParams
  );

  const filteredItem = product.filter(
    (item) => item.collectionId === collectionParams
  );

  const filteredNewItems = product.filter((item) => item.newproducts);
  const [count] = useState(5);

  // useEffect(() => {
  //   const paths = { [+collectionList]: collectionName[0]?.title };
  //   dispatch(pathActions.setPaths(paths));
  // }, [collectionName]);

  const sendBreadCrumbsHandler = () => {
    const breadCrumbs = [
      {
        route_name: 'Главное',
        route: '/',
      },
      {
        route_name: 'Коллекции',
        route: '/collections',
      },
      {
        route_name: `${collectionName[0]?.title}`,
      },
    ];
    dispatch(asyncUpdateBreadcrumb(breadCrumbs));
  };

  useEffect(() => {
    sendBreadCrumbsHandler();
  }, []);

  return (
    <div className="container">
      <StyledP>{`${collectionName[0]?.title}`}</StyledP>

      <div>
        <StyledContent>
          {filteredItem.map((item) => (
            <div key={item.id}>
              <Content title={`${collectionName[0]?.title}`} item={item} />
            </div>
          ))}
        </StyledContent>
      </div>
      <div style={{ marginTop: 64 }}>
        <StyledTitle>Новинки</StyledTitle>
        <div style={{ display: 'flex' }}>
          {filteredNewItems.slice(0, count).map((item) => (
            <InterestedProducts key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionList;
