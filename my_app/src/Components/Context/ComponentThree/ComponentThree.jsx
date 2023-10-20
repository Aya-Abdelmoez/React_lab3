import React , { Component } from "react";
import { UserConsumer } from "../ContexData";
import ComponentFour from "../ComponentFour/ComponentFour"; 
class ComponentThree extends Component{
    render(){
        return(
            <div>
            <UserConsumer>
                
                {
                    (value) => {
                        return(
                        <h3>componentThree {value}</h3>
                        )
                    }

                }

            
            </UserConsumer>
            <ComponentFour />
              </div>
           
        )

        
    }
}
export default  ComponentThree;