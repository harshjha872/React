import React, { useState } from 'react';
import './style.module.css';
import Form from './Form';
import DateBox from './date';
import AuthContext from './context/Authcontext';
// import styled from 'styled-components';

const App = () => {
  //!styled components
  // const Button = styled.button`
  //   color: white;
  // `;

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
    <AuthContext.Provider
      value={{
        insideContext: false,
        displayValues: displayValueFunction,
      }}
    >
      <Form />
      {conTent}
      {/* styled component : <Button /> */}
    </AuthContext.Provider>
  );
};

export default App;
