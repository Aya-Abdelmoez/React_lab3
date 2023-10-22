import React from 'react'
import { MyContext ,MyContextProvider } from '../MyContext';
import ComponentFiveWithHooks from '../ComponentFiveWithHooks/ComponentFiveWithHooks';
function ComponentFourWithHooks() {
  return (
    <div>
    <div>ComponentFourWithHooks</div>
    <ComponentFiveWithHooks />
    </div>
  )
}

export default ComponentFourWithHooks