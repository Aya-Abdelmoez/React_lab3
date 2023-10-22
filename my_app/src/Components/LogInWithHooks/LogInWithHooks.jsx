import React,{useState} from 'react'

function LogInWithHooks() {
    const [state , setState] = useState({password : "" , Email : ""});

    const handlePassword = (event)=>{
        setState({password : event.target.value});
    }
    const handleEmail = (event)=> {
        setState({Email : event.target.value});
    }
    const handleSubmit = (event)=> {
        event.preventDefault();
        console.log('Signup form submitted with data:', state);
    }
   
    return(

        <form onSubmit={handleSubmit}>
        <div> 
       <label>Email</label>
       <input value={state.Email}  onChange={handleEmail}/>
       </div>
       <div>
       <label>Password</label>
       <input  value={state.password} onChange={handlePassword}/>
       </div>
       <button type="submit">log in</button>
      </form>
    )
  
}

export default LogInWithHooks