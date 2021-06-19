import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Form from './form';
import DisplayData from './DisplayData';

const App = () => {
  const [DataState, setDataState] = useState([]);

  let displayEle = DataState.map((ele) => (
    <DisplayData UserName={ele.UserName} UserAge={ele.UserAge} />
  ));

  const parsingValues = (accept) => {
    setDataState((puranivalues) => [
      {
        UserAge: accept.UserAge,
        UserName: accept.UserName,
      },
      ...puranivalues,
    ]);
  };

  return (
    <div>
      <Form valueFunction={parsingValues} />
      {DataState && displayEle}
    </div>
  );
};

export default App;
