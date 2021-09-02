import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CounterActions } from './store';
import { sendReq } from './counterSlice';

const App = () => {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  const IncreseHandler = () => {
    dispatch(CounterActions.increment());
    dispatch(sendReq(5));
  };

  const DecreaseHandler = () => {
    dispatch(CounterActions.decrement());
  };

  const IncreaseBy10Handler = () => {
    dispatch(CounterActions.increaseby10(10));
  };

  return (
    <Fragment>
      <h1>{counter}</h1>
      <button onClick={IncreseHandler}>+</button>
      <button onClick={DecreaseHandler}>-</button>
      <button onClick={IncreaseBy10Handler}>+10</button>
    </Fragment>
  );
};

export default App;
