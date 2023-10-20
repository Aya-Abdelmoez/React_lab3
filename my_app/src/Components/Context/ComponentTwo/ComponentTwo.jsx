import { Component } from "react";
import ComponentThree from "../ComponentThree/ComponentThree";
class ComponentTwo extends Component{
    render(){
        return(
            <div>
              <ComponentThree />
            </div>
        )

        
    }
}
export default ComponentTwo;