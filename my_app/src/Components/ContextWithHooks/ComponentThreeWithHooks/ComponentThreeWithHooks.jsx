import React, { useContext } from 'react'

import { MyContext ,MyContextProvider } from '../MyContext';
import ComponentFourWithHooks from '../ComponentFourWithHooks/ComponentFourWithHooks';
function ComponentThreeWithHooks() {
    const {valueFromCompOne} = useContext(MyContext);
  return (
    <div>
    <div>ComponentThreeWithHooks</div>
    <div>value From Comp : {valueFromCompOne}</div>
    <ComponentFourWithHooks />
    </div>

  )
}

export default ComponentThreeWithHooks