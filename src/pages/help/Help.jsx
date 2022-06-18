import React, { useEffect } from 'react';
import HelpCard from '../../components/help/HelpCard';
import { useDispatch, useSelector } from 'react-redux';
import helpImage from '../../assets/images/help.png';
import classes from './Help.module.css';
import { asyncUpdateBreadcrumb } from '../../store/breadCrumbsSlice';

const Help = () => {
  const helpData = useSelector((state) => state.commerce.data.help);

  const dispatch = useDispatch();

  const sendBreadCrumbsHandler = () => {
    const breadCrumbs = [
      {
        route_name: 'Главное',
        route: '/',
      },
      {
        route_name: 'Помощь',
      },
    ];
    dispatch(asyncUpdateBreadcrumb(breadCrumbs));
  };

  useEffect(() => {
    sendBreadCrumbsHandler();
  }, []);

  return (
    <div className="container">
      <div className={classes.container}>
        <div className={classes.img_block}>
          <img width={500} src={helpImage} alt="/" />
        </div>
        <div className={classes.section}>
          <p>Помощь</p>
          {helpData?.map((item) => (
            <HelpCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Help;
