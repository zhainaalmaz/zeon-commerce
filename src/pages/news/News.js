import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './News.module.css';

const News = () => {
  const newsData = useSelector((state) => state.commerce.data.news);
  const [limit, setLimit] = useState(0);
  const [hideText, setHideText] = useState(false);

  useEffect(() => {
    changeLimit(2);
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

  const toggleText = () => {
    setHideText(!hideText);
  };

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
                  <div className={classes.desktop_news}>
                    <span>{item.title}</span>
                    <p>{item.description}</p>
                  </div>

                  <div className={classes.mobile_news}>
                    {hideText ? (
                      <p>{item.description}</p>
                    ) : (
                      <p>{item.description.substr(0, 200)}</p>
                    )}
                    {hideText ? (
                      <button
                        className={classes.hide_button}
                        onClick={toggleText}
                      >
                        Скрыть
                      </button>
                    ) : (
                      <button
                        className={classes.hide_button}
                        onClick={toggleText}
                      >
                        Читать полностью
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default News;
