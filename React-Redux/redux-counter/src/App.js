import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const IncreseHandler = () => {
    dispatch({ type: 'in' });
  };

  const DecreaseHandler = () => {
    dispatch({ type: 'dec' });
  };
  return (
    <Fragment>
      <h1>{counter}</h1>
      <button onClick={IncreseHandler}>+</button>
      <button onClick={DecreaseHandler}>-</button>
    </Fragment>
  );
};

export default App;
