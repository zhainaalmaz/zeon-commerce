import React, { useState } from 'react';
import { ReactComponent as NextSvg } from '../../assets/icons/next .svg';
import { ReactComponent as PrevSvg } from '../../assets/icons/prev.svg';
import classes from './HelpCard.module.css';

const HelpCard = ({ item }) => {
  const [text, setText] = useState(false);

  return (
    <div
      className={classes.container}
      onClick={() => setText((item) => !item)}
      key={item.id}
    >
      <div className={classes.content}>
        <h4>{item.title}</h4>
        <div style={{ paddingRight: '16px' }}>
          {text ? <PrevSvg /> : <NextSvg />}
        </div>
      </div>
      {text && <h5 className={classes.text}>{item.text} </h5>}
    </div>
  );
};

export default HelpCard;
