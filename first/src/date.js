import './date.css';
import React from 'react';

const DateBox = (props) => {
  const date = new Date();
  const month = date.toLocaleString('en-US', { month: 'long' });
  return (
    <div className='main--container'>
      <div className='container--contents'>
        <div className='container--box'>
          <p className='container--content'>{month}</p>
          <p className='container--content'>{date.getFullYear()}</p>
          <h1 className='date--head'>{date.getDate()}</h1>
        </div>
        <div className='NameOfTopic'>{props.Topic}</div>
        <div className='container--time'>{props.time}</div>
      </div>
    </div>
  );
};

export default DateBox;
