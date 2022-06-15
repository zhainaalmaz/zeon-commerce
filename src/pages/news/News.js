import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './News.module.css';

const News = () => {
  const newsData = useSelector((state) => state.commerce.data.news);
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    changeLimit(4);
  }, []);

  const changeLimit = (num) => {
    setLimit((limit) => limit + num);
  };

  const scrollHandler = (e) => {
    e.target.documentElement.scrollHeight -
      (e.target.documentElement.scrollTop + window.innerHeight) <
      100 && changeLimit(4);
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <div style={{ backgroundColor: '#f8f8f8' }}>
      <div className="container">
        <p className={classes.title}>Новости </p>
        {newsData
          ?.filter((i, k) => k < limit)
          .map((item) => {
            return (
              <div className={classes.container} key={item.id}>
                <img width={226} src={item.image} alt="newsImg" />
                <div className={classes.section}>
                  <span>{item.title}</span>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default News;
