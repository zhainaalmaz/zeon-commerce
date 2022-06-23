import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Content from '../../ui/content/Content';
import InterestedProducts from '../interestedProducts/InterestedProducts';
import './SearchBar.css';
import Pagination from '../../ui/pagination/Pagination';
import cls from './SearchPage.module.css';
import { asyncUpdateBreadcrumb } from '../../store/breadCrumbsSlice';

const SearchPage = () => {
  const products = useSelector((state) => state.products.data);
  const filteredItem = products.filter((item) => item.discount);

  const [interestPost, setInterestedPost] = useState([]);
  const [count] = useState(5);

  const params = useParams();
  const searchItemParams = params.inputEntered;
  const dispatch = useDispatch();

  const filterResult = products.filter((value) => {
    return value.title.toLowerCase().includes(searchItemParams.toLowerCase());
  });

  useEffect(() => {
    setInterestedPost(filteredItem);
  }, []);

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [itemOffset, setItemOffset] = useState(0);
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    if (window.innerWidth < 321) {
      setLimit(4);
    } else {
      setLimit(8);
    }
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + limit;
    setCurrentItems(filterResult.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filterResult.length / limit));
  }, [itemOffset, limit]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * limit) % filterResult.length;
    setItemOffset(newOffset);
  };

  const sendBreadCrumbsHandler = () => {
    const breadCrumbs = [
      {
        route_name: 'Главное',
        route: '/',
      },
      {
        route_name: 'Резултаты поиска',
      },
    ];
    dispatch(asyncUpdateBreadcrumb(breadCrumbs));
  };

  useEffect(() => {
    sendBreadCrumbsHandler();
  }, []);

  return (
    <div className="container">
      {filterResult.length === 0 ? (
        <div className={cls.section}>
          <h6 className={cls.description}>
            Результаты поиска по запросу: {searchItemParams}
          </h6>
          <p className={cls.text}>По Вашему запросу ничего не найдено.</p>
          <p className={cls.title}>Возможно Вас заинтересует</p>
          <div style={{ display: 'flex' }} className={cls.interestPost}>
            {interestPost.slice(0, count).map((item) => (
              <InterestedProducts key={item.id} item={item} />
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className={cls.section}>
            <h6 className={cls.description}>
              Результаты поиска по запросу: {searchItemParams}
            </h6>
          </div>
          <div className={cls.content}>
            {currentItems.map((item) => (
              <div key={item.id}>
                <Content item={item} />
              </div>
            ))}
          </div>
          <div className={cls.pagination_container}>
            <Pagination
              handlePageClick={handlePageClick}
              pageCount={pageCount}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SearchPage;
