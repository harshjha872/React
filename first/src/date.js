import './date.css';
const DateBox = () => {
  const date = new Date();
  const month = date.toLocaleString('en-US', { month: 'long' });
  return (
    <div>
      <div className='container--box'>
        <p className='container--content'>{month}</p>
        <p className='container--content'>{date.getFullYear()}</p>
        <h1 className='date--head'>{date.getDate()}</h1>
      </div>
    </div>
  );
};

export default DateBox;
