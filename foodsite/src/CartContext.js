import React from 'react';

const CartContext = React.createContext({
  Products: {},
  passinCartProducts: (Product) => {},
});

export default CartContext;
