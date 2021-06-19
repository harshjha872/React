import React from 'react';
import classes from './modals.module.css';

const Error = (props) => {
  return (
    <div className={classes['main--container']} onClick={props.closeError}>
      <h1>Invalid value!!!!</h1>
      <button onClick={props.closeError}>Okay</button>
    </div>
  );
};

export default Error;
