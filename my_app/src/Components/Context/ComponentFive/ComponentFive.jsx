import React , { Component } from "react";
import { UserConsumer } from "../ContexData";
class ComponentFive extends Component{
    render(){
        return(
            <div>
            <UserConsumer>
                
                {
                    (value) => {
                        return(
                        <h3>componentFive {value}</h3>
                        )
                    }

                }

            
            </UserConsumer>
           
              </div>
           
        )

        
    }
}
export default  ComponentFive;