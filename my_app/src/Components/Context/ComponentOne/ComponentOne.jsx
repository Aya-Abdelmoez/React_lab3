import { Component } from "react";
import ComponentTwo from "../ComponentTwo/ComponentTwo";
class ComponentOne extends Component{
    render(){
        return(
            <div>
            <h1>componentOne</h1>
              <ComponentTwo />
            </div>
        )

        
    }
}
export default ComponentOne;