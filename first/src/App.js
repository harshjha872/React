import React, { useState } from 'react';
import './style.css';
import Form from './Form';
import DateBox from './date';

const App = () => {
  const [TopicContents, setTopicContent] = useState([
    {
      Topic: 'Java',
      time: '1',
      date: new Date(),
    },
    {
      Topic: 'React',
      time: '5',
      date: new Date(),
    },
  ]);

  //!Data coming from component used - Form component
  const displayValueFunction = (data) => {
    setTopicContent((pre) => [
      {
        Topic: data.text,
        time: data.time,
        date: data.date,
      },
      ...pre,
    ]);
  };

  return (
    <div>
      <Form displayValues={displayValueFunction} />
      {TopicContents.map((curr) => (
        <DateBox Topic={curr.Topic} time={curr.time} date={curr.date} />
      ))}
    </div>
  );
};

export default App;
