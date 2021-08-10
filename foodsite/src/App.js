import React, { useState } from 'react';
import Navbar from './nav';
import FoodItem from './FoodItem';
import Modal from './Modal';
import CartContext from './CartContext';

function App() {
  const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

  const [cartProds, setCartProds] = useState([]);

  const CartProducts = (Product) => {
    setCartProds((pre) => {
      const repeatedFood = pre.find((ele) => Product.Name === ele.Name);
      console.log(repeatedFood);
      if (repeatedFood) {
        const newFoodList = pre.filter((ele) => repeatedFood.Name !== ele.Name);
        console.log(newFoodList);
        repeatedFood.Amount = repeatedFood.Amount + Product.Amount;
        return [...newFoodList, repeatedFood];
      } else {
        return [Product, ...pre];
      }
    });
  };

  const currenStateProd = (CurrentStateofProducts) => {
    console.log(CurrentStateofProducts);
  };

  // const [dataPrint, setDataPrint] = useState(null);

  // const getData = () => {
  //   fetch('http://localhost:8000/getdata')
  //     .then((res) => res.json())
  //     .then((data) => setDataPrint(data.message));
  // };

  const content = DUMMY_MEALS.map((ele) => (
    <FoodItem
      name={ele.name}
      description={ele.description}
      price={ele.price}
      key={ele.id}
    />
  ));

  return (
    <CartContext.Provider
      value={{ Products: cartProds, passinCartProducts: CartProducts }}
    >
      <Navbar />
      {content}
      <Modal currenStateProd={currenStateProd} />
      {/* <button onClick={getData}>getData</button> */}
      {/* <div>{dataPrint}</div> */}
    </CartContext.Provider>
  );
}

export default App;
