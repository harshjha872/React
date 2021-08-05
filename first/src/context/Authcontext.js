import React from 'react';

const AuthContext = React.createContext({
  insideContext: true,
  displayValues: (Product) => {},
});

export default AuthContext;
