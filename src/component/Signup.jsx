import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { getUser } from '../Redux/Getuser/action'
import { login } from '../Redux/Login/action'
import './Signup.css'
export const Signup = () => {
     const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [role,setRole] = useState('')
const data=useSelector((state)=>state.user)

const {isAuthenticate,token} = useSelector((store)=>store.login)
const dispatch = useDispatch((store)=>store.login);
const navigate = useNavigate()
const handleLogin = ()=>{
  const loginCridential = {
    email,
    password,
 
  }
  // console.log(loginCridential);
  dispatch(login(loginCridential,dispatch));
  if(isAuthenticate){
    dispatch(getUser(token,dispatch))
   navigate('/admin')
}
}
console.log(data,"datalogincredentials")

useEffect(()=>{
    if(isAuthenticate){
        dispatch(getUser(token,dispatch))
       
    }
  
},[])
// console.log(isAuthenticate,token)
// const checktonavigate=()=>{
// //  console.log(data.role)
// //  console.log(data.email)
// if(data.role=="admin"||data.role=="Admin"){
//  navigate('/admin')
// }else{
// navigate('/home')
// }
// }
// checktonavigate()
  return (
    <div className='main'>
        <div className='container'>
            <h2 className='para'>Log In</h2>
            
         <p className='para'>Dont have an account?<span className='blue' onClick={()=>(navigate('/signup'))}>Signup</span></p>
        <br></br>
       
         <input type="text" placeholder='Email'className='inputemail' onChange={(e)=>setEmail(e.target.value)} />
        <br />
       
         <input type="text" placeholder='password' className='inputpass' onChange={(e)=>setPassword(e.target.value)} />
       <br />
      
       <br />
         <button className='buttonlogin' onClick={handleLogin}> Login</button>
         <br />
         <p className='blue'>Forgot password ?</p>
        </div>
    </div>
  )
}