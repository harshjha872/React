import { useState } from 'react';

const FoodItem = (props) => {
  const [Amount, setAmount] = useState(1);

  const onchangeHandler = (e) => {
    setAmount(Number(e.target.value));
  };

  // const onclickHandler = () => {};

  return (
    <div className='card w-50'>
      <div className='card-body'>
        <h5 className='card-title'>{props.name}</h5>
        <p className='card-text'>{props.description}</p>
        <p className='card-text'>PRICE: {props.price}</p>
        <label>Amount</label>
        <input type='number' onChange={onchangeHandler} value={Amount} />
        <button>Add</button>
      </div>
    </div>
  );
};

export default FoodItem;
