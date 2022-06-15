import React from 'react';
import HelpCard from '../../components/help/HelpCard';
import { useSelector } from 'react-redux';
import helpImage from '../../assets/images/help.png';
import classes from './Help.module.css';

const Help = () => {
  const helpData = useSelector((state) => state.commerce.data.help);

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
