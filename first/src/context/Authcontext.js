import React from 'react';

const AuthContext = React.createContext({
  insideContext: true,
  displayValues: () => {},
});

export default AuthContext;
