import React , {useState}from 'react'
import LogInWithHook from '../LogInWithHooks/LogInWithHooks';
import SignUpWithHooks from '../SignUpWithHooks/SignUpWithHooks';
import './style.css'
function HomeWithHooks() {
    const intialState = {state :false };
    const [state , setState] = useState({state : false })
    const hanleLoginState = ()=> {
        setState({state : true});
    }
    const hanleSignupState = ()=> {
        setState({state : false});
    }
  return (
    <div>
    <button className = 'counter-btn'onClick={hanleLoginState}>log in</button>
    <button  className = 'counter-btn'onClick={hanleSignupState}>sign up</button>
    {( state.state) ? <LogInWithHook /> : <SignUpWithHooks />}
    </div>
  )
} 

export default HomeWithHooks