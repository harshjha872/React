import React from 'react';
import ReactDOM from 'react-dom';

const DisplayData = (props) => {
  return (
    <div>
      {props.UserName}
      {props.UserAge}
    </div>
  );
};

export default DisplayData;
