import { useEffect, useState } from 'react';
import React from 'react';

const Form = (props) => {
  //States
  const [inputText, setInputText] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [inputTime, setInputTime] = useState('');

  //!useEffect Hook

  useEffect(() => {
    const timeoutFunc = setTimeout(() => {
      console.log('Inside SetTimeout');
    }, 500);

    return () => {
      console.log('return statement');
      clearTimeout(timeoutFunc);
    };
  }, [inputText]);

  /////////////////////////////////

  const textchangeHandler = (e) => {
    setInputText(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setInputDate(e.target.value);
  };

  const timeChangeHandler = (e) => {
    setInputTime(e.target.value);
  };

  const submitHAndler = (e) => {
    e.preventDefault();
    const FinalValues = {
      text: inputText,
      date: new Date(inputDate),
      time: inputTime,
    };

    setInputText('');
    setInputDate('');
    setInputTime('');

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
        <input
          type='number'
          placeholder='Minimum time in hrs'
          value={inputTime}
          onChange={timeChangeHandler}
        />
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default Form;
