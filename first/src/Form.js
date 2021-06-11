import { useState } from 'react';
import React from 'react';

const Form = (props) => {
  //States
  const [inputText, setInputText] = useState('');
  const [inputDate, setInputDate] = useState('');

  const textchangeHandler = (e) => {
    setInputText(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setInputDate(e.target.value);
  };

  const submitHAndler = (e) => {
    e.preventDefault();
    const FinalValues = {
      text: inputText,
      date: inputDate,
    };
    // console.log(FinalValues);

    setInputText('');
    setInputDate('');

    //!Passing values to above component - App.js component
    props.displayValues(FinalValues);
  };

  return (
    <form onSubmit={submitHAndler}>
      <div>
        <label>Enter any text</label>
        <input
          type='text'
          placeholder='Name Of Topic'
          value={inputText}
          onChange={textchangeHandler}
        />
        <input
          type='date'
          placeholder='Enter Date'
          value={inputDate}
          onChange={dateChangeHandler}
        />
        <input type='text' placeholder='Minimum time' />
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default Form;
