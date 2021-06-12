import './date.css';
import React from 'react';

const DateBox = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  return (
    <div className='main--container'>
      <div className='container--contents'>
        <div className='container--box'>
          <p className='container--content'>{month}</p>
          <p className='container--content'>{props.date.getFullYear()}</p>
          <h1 className='date--head'>{props.date.getDay()}</h1>
        </div>
        <div className='NameOfTopic'>{props.Topic}</div>
        <div className='container--time'>{props.time} Hrs</div>
      </div>
    </div>
  );
};

export default DateBox;
