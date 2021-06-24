import { useEffect, useState, useReducer, useContext } from 'react';
import React from 'react';
import AuthContext from './context/Authcontext';

//!changing state function of useReducer outside component
const courseReducer = (state, action) => {
  if (action.type === 'String it is.')
    console.log(action.type, action.valueInsideChanger);
  else {
    console.log(state.isString);
    console.log(state.val);
  }
  return { val: 'function Finished', isString: true };
};

const Form = () => {
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

  //!useReducer Hook

  const [CourseName, CourseNameChanger] = useReducer(courseReducer, {
    //starting state
    val: '',
    isString: true,
  });

  /////////////////////////////////

  const textchangeHandler = (e) => {
    setInputText(e.target.value);

    //!useReducer
    CourseNameChanger({
      type: 'String it is.',
      valueInsideChanger: e.target.value,
    });
  };

  const dateChangeHandler = (e) => {
    setInputDate(e.target.value);
  };

  const timeChangeHandler = (e) => {
    setInputTime(e.target.value);

    //!useReducer
    CourseNameChanger({
      type: 'its is hrs',
      valueInsideChanger: e.target.value,
    });
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
    // props.displayValues(FinalValues);
    ctx.displayValues(FinalValues);

    //!useReducer console
    console.log(CourseName.val);
  };

  ///////////////////////////////////

  //!useContext

  const ctx = useContext(AuthContext);
  // console.log(ctx);

  ///////////////////////////////////

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
