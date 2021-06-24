import style from './date.module.css';
import React from 'react';

const DateBox = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });

  return (
    <div className={style['main--container']}>
      <div className={style['container--contents']}>
        <div className={style['container--box']}>
          <p className={style['container--content']}>{month}</p>
          <p className={style['container--content']}>
            {props.date.getFullYear()}
          </p>
          <h1 className={style['date--head']}>{props.date.getDay()}</h1>
        </div>
        <div className={style.NameOfTopic}>{props.Topic}</div>
        <div className={style['container--time']}>{props.time} Hrs</div>
      </div>
    </div>
  );
};

export default DateBox;
