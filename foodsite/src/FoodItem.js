import { useState, useContext } from 'react';
import CartContext from './CartContext';

const FoodItem = (props) => {
  const cartItems = useContext(CartContext);

  const [Amount, setAmount] = useState(1);

  const onchangeHandler = (e) => {
    setAmount(Number(e.target.value));
  };

  const Product = {
    Name: props.name,
    Amount: Amount,
    price: props.price,
  };

  const onclickHandler = () => {
    cartItems.passinCartProducts(Product);
  };

  return (
    <div className='card w-50'>
      <div className='card-body'>
        <h5 className='card-title'>{props.name}</h5>
        <p className='card-text'>{props.description}</p>
        <p className='card-text'>PRICE: {props.price}</p>
        <label>Amount</label>
        <input type='number' onChange={onchangeHandler} value={Amount} />
        <button onClick={onclickHandler}>Add</button>
      </div>
    </div>
  );
};

export default FoodItem;
