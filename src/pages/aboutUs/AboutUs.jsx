import React from 'react';
import { useSelector } from 'react-redux';
import classes from './AboutUs.module.css';

const AboutUs = () => {
  const aboutUs = useSelector((state) => state.commerce.data.aboutUs);

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
