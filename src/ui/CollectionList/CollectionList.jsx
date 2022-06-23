import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Content from '../content/Content';
import InterestedProducts from '../../components/interestedProducts/InterestedProducts';
import { asyncUpdateBreadcrumb } from '../../store/breadCrumbsSlice';
import cls from './CollectionList.module.css';
import Pagination from '../pagination/Pagination';

const CollectionList = () => {
  const dispatch = useDispatch();
  const { collectionList } = useParams();
  const collectionParams = +collectionList;

  const product = useSelector((state) => state.products.data);
  const collection = useSelector((state) => state.collections.data);

  const collectionName = collection.filter(
    (element) => element.id === collectionParams
  );

  const filteredItem = product.filter(
    (item) => item.collectionId === collectionParams
  );

  const filteredNewItems = product.filter((item) => item.newproducts);
  const [count] = useState(5);

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 8;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredItem.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(collection.length / itemsPerPage));
  }, [itemOffset]);

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
      <div className={cls.container}>
        <h5 className={cls.title}>{`${collectionName[0]?.title}`}</h5>

        <div className={cls.content}>
          {currentItems.map((item) => (
            <div key={item.id}>
              <Content title={`${collectionName[0]?.title}`} item={item} />
            </div>
          ))}
        </div>
        <div className={cls.pagination_container}>
          <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
        </div>

        <div style={{ marginTop: 64 }}>
          <h5 className={cls.interested_title}>Новинки</h5>
          <div className={cls.interestedProducts}>
            {filteredNewItems.slice(0, count).map((item) => (
              <InterestedProducts key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionList;
