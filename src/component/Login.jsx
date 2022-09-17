import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router';
import { registerUser } from '../Redux/Signup/action';
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
          password:password,
         role:role,
          
        }
        // console.log(userData);
        dispatch(registerUser(userData));
        navigate('/')
        
      }
  return (
    <div className='main'>
      <div className="logoBanner">
        
      </div>
      <div className='container'>
          <h2 className='parasign'>Enter your email</h2>
          
      <p className='para'>You’ll use it to signup to Brand Beyomd It</p>
      <br></br>
    
      <input type="text" placeholder='Email'className='inputemail' onChange={(e)=>setEmail(e.target.value)} />
    <br />
    <input type="text" placeholder='Password'className='inputemail' onChange={(e)=>setPassword(e.target.value)} />
    <br />
    <input type="text" placeholder='Role'className='inputemail' onChange={(e)=>setRole(e.target.value)} />
    <br />
    <br />
      <button className='buttonlogin' onClick={handleSignup}>Next</button>
    
      </div>

    </div>
  )
}