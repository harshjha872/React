import React, { useState } from 'react';
import './style.css';
import Form from './Form';
import DateBox from './date';
import styled from 'styled-components';
const App = () => {
  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
  `;

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

  let conTent = <p>No subject studied.</p>;

  if (TopicContents.length > 0) {
    conTent = TopicContents.map((curr) => (
      <DateBox Topic={curr.Topic} time={curr.time} date={curr.date} />
    ));
  }

  return (
    <div>
      <Form displayValues={displayValueFunction} />
      {conTent}
      <Button />
    </div>
  );
};

export default App;
