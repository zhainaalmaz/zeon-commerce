import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncUpdateBreadcrumb } from '../../store/breadCrumbsSlice';
import classes from './AboutUs.module.css';

const AboutUs = () => {
  const aboutUs = useSelector((state) => state.commerce.data.aboutUs);
  const dispatch = useDispatch();

  const sendBreadCrumbsHandler = () => {
    const breadCrumbs = [
      {
        route_name: 'Главное',
        route: '/',
      },
      {
        route_name: 'О нас',
      },
    ];
    dispatch(asyncUpdateBreadcrumb(breadCrumbs));
  };

  useEffect(() => {
    sendBreadCrumbsHandler();
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className="container">
        <div className={classes.container1}>
          <div className={classes.images_block}>
            <img width={327} src={aboutUs?.image1} alt="aboutUsImg1" />
            <img width={327} src={aboutUs?.image2} alt="aboutUsImg2" />
          </div>

          <div className={classes.image_block}>
            <img width={327} src={aboutUs?.image3} alt="aboutUsImg3" />
          </div>
          <div className={classes.text_block}>
            <span>{aboutUs?.title}</span>
            <p>{aboutUs?.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
