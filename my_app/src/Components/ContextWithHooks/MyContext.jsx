import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [valueFromCompOne, setValueFromCompOne] = useState('');

  return (
    <MyContext.Provider value={{ valueFromCompOne, setValueFromCompOne }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };