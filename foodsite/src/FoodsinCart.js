import { useState } from 'react';

const FoodinCart = (props) => {
  const [Amount, setAmount] = useState(props.Amount);

  const PlusHandler = () => {
    setAmount(Amount + 1);
  };

  const MinusHandler = () => {
    setAmount(Amount - 1);
  };

  return (
    <div className='card w-50'>
      <div className='card-body'>
        <h5 className='card-title'>{props.name}</h5>
        <p className='card-text'>PRICE: {props.price}</p>
        <p className='card-text'>{Amount}</p>
        <div class='btn-group me-2' role='group' aria-label='Second group'>
          <button type='button' class='btn btn-secondary' onClick={PlusHandler}>
            +
          </button>
          <button
            type='button'
            class='btn btn-secondary'
            onClick={MinusHandler}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodinCart;
