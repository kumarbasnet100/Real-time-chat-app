import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'
import { login, signup, resetPass } from '../../config/firebase'

const Login = () => {

  const [currState, setCurrState] = useState("Sign Up");

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e)=>{
    e.preventDefault();
    if (currState === "Sign Up"){
      signup(userName, email, password);
    }else{
      login(email,password);
    }
  }

  return (
    <div className='login'>
      <img src={assets.logo_big} alt="logo" className='logo'/>
      <form onSubmit={onSubmitHandler} className='login-form'>
        <h2>{currState}</h2>
        {
          currState === "Sign Up" ? <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder='Username' className="form-input" required /> :<></>
        }
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email address' className="form-input" required />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' className="form-input" required/>
        <button type='submit'>{currState === "Sign Up" ? "Create account" : "Login now"}</button>
        <div className="login-term">
          <input type="checkbox"/>
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className="login-forgot">
          {
            currState === "Sign Up" ? <p className='login-toggle'>Already have an account? <span onClick={()=>setCurrState("Log In")}>Login here</span></p> 
            : <p className='login-toggle'>New to App? create account <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
          }
          {currState === "Log In" ? <p className='login-toggle'>Forgot Password ? <span onClick={()=>resetPass(email)}>Reset here</span></p> : null}
        </div>
      </form>
    </div>
  )
}

export default Login
