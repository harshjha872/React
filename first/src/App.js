import './style.css';
import DateBox from './date';
import NameCompo from './NameCompo';
import { useState } from 'react';

const App = () => {
  const date = new Date().getMonth();
  let i = 0;

  const [currentDate, setDate] = useState(date);

  const clickHandler = () => {
    setDate(++i);
    console.log('Click Me is clicked');
  };

  return (
    <div>
      <NameCompo Name='Harsh Jha' />
      <DateBox />
      <div className='heading'>Hello</div>
      <h1 className='date--heading'>{currentDate}</h1>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
};

export default App;
