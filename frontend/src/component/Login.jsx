import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router';
import { registerUser } from '../Redux/SignUp/action';
import './Login.css'
export const Login = () => {
 
   
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [role,setRole] = useState("");
    const navigate =useNavigate()
    const {isSignUpSuccess,signUpLoading}= useSelector((state)=>state.signup)
    // console.log('skdfjlasdf',signUpLoading);
    const dispatch = useDispatch((s)=>s.signup);
  
    const handleSignup =()=>{
          const userData = {
       
          email:email,
          password:password
      
          
        }
        // console.log(userData);
        dispatch(registerUser(userData));
        navigate('/login')
        
      }
  return (
    <div className='main'>
      <div className="logoBanner">
        
      </div>
      <div className='container'>
          <h2 className='parasign'>Enter your email</h2>
          
      <p className='para'>You’ll use it to signup to GreenDeck</p>
      <br></br>
    
      <input type="text" placeholder='Email'className='inputemail' onChange={(e)=>setEmail(e.target.value)} />
    <br />
    <input type="text" placeholder='Password'className='inputemail' onChange={(e)=>setPassword(e.target.value)} />
    <br />
   
    <br />
      <button className='buttonlogin' onClick={handleSignup}>Next</button>
    
      </div>

    </div>
  )
}