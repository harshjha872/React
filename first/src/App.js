import React from 'react';
import './style.css';
// import DateBox from './date';
// import NameCompo from './NameCompo';
// import { useState } from 'react';
import Form from './Form';
import DateBox from './date';

const App = () => {
  // const [displayText, setDisplayText] = useState('React Learn');
  // const date = new Date().getMonth();

  // const [currentDate, setDate] = useState(date);

  // const clickHandler = () => {
  //   setDate('Updated');

  //   console.log('Click Me is clicked');
  // };

  //!Data coming from component used - Form component
  const displayValueFunction = (data) => {
    console.log('Inside App.js');
    console.log(data);
    // setDisplayText(data.text);
  };

  //Data Displayed
  const TopicContent = [
    {
      Topic: 'Java',
      time: '1 hrs',
    },
    {
      Topic: 'React',
      time: '5 Hrs',
    },
  ];
  return (
    <div>
      {/* <NameCompo Name={displayText} /> */}
      {/* <div className='heading'>Hello</div> */}
      {/* <h1 className='date--heading'>{date}</h1> */}
      {/* <button onClick={clickHandler}>Click Me</button> */}
      <Form displayValues={displayValueFunction} />
      {[<DateBox {...TopicContent[0]} />, <DateBox {...TopicContent[1]} />]}
    </div>
  );
};

export default App;
