import React, { useContext } from 'react';
import { MyContext , MyContextProvider } from '../MyContext.jsx'
import ComponentTwoWithHooks from '../CompoentTwoWithHooks/ComponentTwoWithHooks.jsx';
function ComponentOne() {
    const { setValueFromCompOne } = useContext(MyContext);
    const handleClich = ()=>{}
       const value = "Hello From Component One"
       setValueFromCompOne(value);
  return (
    <div>
        <h1>ComponentOne</h1>
        <button onClick={handleClich}>Set Value</button>
       <ComponentTwoWithHooks />
    </div>
  )
}

export default ComponentOne