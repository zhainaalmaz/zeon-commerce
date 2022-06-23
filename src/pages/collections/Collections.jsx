import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CollectionCard from './collectionCard/CollectionCard';
import Pagination from '../../ui/pagination/Pagination';
import { asyncUpdateBreadcrumb } from '../../store/breadCrumbsSlice';
import cls from './Collections.module.css';
import { fetchAsyncCollections } from '../../store/collectionsSlice';

const Collections = () => {
  const collection = useSelector((state) => state.collections?.data);
  const dispatch = useDispatch();

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [itemOffset, setItemOffset] = useState(0);
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    if (window.innerWidth <= 340) {
      setLimit(4);
    } else {
      setLimit(8);
    }
  }, []);

  // useEffect(() => {
  //   dispatch(fetchAsyncCollections());
  // }, []);

  useEffect(() => {
    const endOffset = itemOffset + limit;
    setCurrentItems(collection?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(collection?.length / limit));
  }, [itemOffset, limit, collection]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * limit) % collection?.length;
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
            {collection?.length !== 0 &&
              currentItems?.map((item) => {
                return <CollectionCard key={item.id} item={item} />;
              })}
          </div>
        </div>
        <div className={cls.pagination_container}>
          <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
        </div>
      </div>
    </div>
  );
};

export default Collections;
