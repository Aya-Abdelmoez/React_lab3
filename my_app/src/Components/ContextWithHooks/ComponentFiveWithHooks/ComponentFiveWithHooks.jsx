import React ,{useContext}from 'react'
import { MyContext ,MyContextProvider } from '../MyContext';
function ComponentFiveWithHooks() {
    const {valueFromCompOne} = useContext(MyContext);
  return (
    <di>
    <div>ComponentFiveWithHooks</div>
    <div>value From Comp  : {valueFromCompOne}</div>
    </di>
  )
}

export default ComponentFiveWithHooks