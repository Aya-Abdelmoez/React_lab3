import { Component } from "react";


class LogInComponent extends Component{
    constructor(){
        super();
        this.state = 
        {
            Email : '',
            password : ''
        }
    }
    handleEmail = (event) => {
        this.setState({Email : event.target.value})
    }
    handlePassword = (event) =>{
        this.setState({password : event.target.value});
    }
    handleSubmit = (event)=> {
        event.preventDefault();
        console.log('Signup form submitted with data:', this.state);
    }
    render(){
        const {Email , password} = this.state;
        return(

            <form onSubmit={this.handleSubmit}>
            <div> 
           <label>Email</label>
           <input value={Email}  onChange={this.handleEmail}/>
           </div>
           <div>
           <label>Password</label>
           <input  value={password} onChange={this.handlePassword}/>
           </div>
           <button type="submit">log in</button>
          </form>
        )


        
    }
}
export default LogInComponent; 