import React ,{useState} from 'react'

import  './CounterStyle.css' 

function Counter() {
  const intailState = 0;
  const [counter , setCounter] = useState(intailState);

   const incrementCounter = () => {
    setCounter(PrevState => PrevState + 1 );
   }
   const decrementCounter = () => {
    setCounter(PrevState => PrevState -1 );
     if(counter < 1){
        setCounter(intailState);
     }
   }
  return (
    <div>
        
        <button className='btn' onClick={decrementCounter}>-</button>
    
        <span style={{ fontSize: "24px" }}>{counter}</span>
        <button  className='btn' onClick={incrementCounter}>+</button>
        
        {/* //style={buttonStyle} */}

    </div>
  )
}

export default Counter;