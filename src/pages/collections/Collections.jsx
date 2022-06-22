import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CollectionCard from './collectionCard/CollectionCard';
import Pagination from '../../ui/pagination/Pagination';
import { asyncUpdateBreadcrumb } from '../../store/breadCrumbsSlice';
import cls from './Collections.module.css';

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
      <div className={cls.wrapper}>
        <h5 className={cls.title}>Коллекции</h5>
        <div className="container">
          <div className={cls.content}>
            {currentItems.length !== 0 &&
              currentItems.map((item) => {
                return <CollectionCard key={item.id} item={item} />;
              })}
          </div>
        </div>
        <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
      </div>
    </div>
  );
};

export default Collections;
