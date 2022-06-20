import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Content from '../content/Content';
import InterestedProducts from '../../components/interestedProducts/InterestedProducts';
import { asyncUpdateBreadcrumb } from '../../store/breadCrumbsSlice';
import cls from './CollectionList.module.css';

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
          {filteredItem.map((item) => (
            <div key={item.id}>
              <Content title={`${collectionName[0]?.title}`} item={item} />
            </div>
          ))}
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
