import { Component } from "react";
import LogInComponent from "../LogInComponent/LogInComponent";
import Signup from "../SignUp/SignUp";


class HomeComponent extends Component{

    constructor(){
        super();
        this.state ={
            isSingup : false,
        }
    }
    render(){
        return(
           (this.state.isSingup)? <LogInComponent /> : <Signup />
        )
    }
}
export default HomeComponent;