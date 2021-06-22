import React from 'react';
import ReactDOM from 'react-dom';

const DisplayData = (props) => {
  return (
    <React.Fragment>
      {props.UserName}
      {props.UserAge}
    </React.Fragment>
  );
};

export default DisplayData;
