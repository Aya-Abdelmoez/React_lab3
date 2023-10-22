import React ,{useState} from 'react'
import './style.css'
function SignUpWithHooks() {

    const [state , setState] = useState({password : " " , Email : "" , FirstName : "" ,LastName : " " , Phone :""});

    const handlePassword = (event)=>{
        setState({...state,password : event.target.value});
    }
    const handleEmail = (event)=> {
        setState({...state,Email : event.target.value});
    }
    const handleFirstName = (event)=> {
        setState({...state,FirstName : event.target.value});
    }
    const handleLastName = (event)=> {
        setState({...state,LastName: event.target.value});
    }
    const handlePhone = (event)=> {
        setState({...state,Phone : event.target.value});
    }
    const handleSubmit = (event)=> {
        event.preventDefault();
        console.log('Signup form submitted with data:', state);
    }
  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label>FirstName</label>
      <input type="text" value={state.FirstName} onChange={handleFirstName} />
    </div>
    <div>
      <label>LastName</label>
      <input type="text" value={state.LastName} onChange={handleLastName} />
    </div>
    <div>
      <label>password</label>
      <input type="password" value={state.password} onChange={handlePassword} />
    </div>
    <div>
      <label>Phone</label>
      <input type="number" value={state.phone} onChange={handlePhone} />
    </div>
    <div>
      <label>Email</label>
      <input type="mail" value={state.Email} onChange={handleEmail} />
    </div>
    <button type="submit">Sign up</button>
  </form>
  )
}

export default SignUpWithHooks