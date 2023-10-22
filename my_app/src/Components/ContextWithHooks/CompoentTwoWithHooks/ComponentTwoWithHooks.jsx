import React from 'react'
import ComponentThreeWithHooks from '../ComponentThreeWithHooks/ComponentThreeWithHooks'
import { MyContext ,MyContextProvider } from '../MyContext';
function ComponentTwoWithHooks() {
  return (
    <div>
    <div>ComponentTwoWithHooks</div>
    <ComponentThreeWithHooks />
    </div>
  )
}

export default ComponentTwoWithHooks