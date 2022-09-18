import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Logout } from '../Redux/Login/action'
import './Login.css'

export const Navbar = () => {
    const dispatch=useDispatch()
    const [detail,setdetail]=useState([])
    const navigate=useNavigate()
    const data=useSelector((state)=>state.user)
useEffect(()=>{
    setdetail(data.email)
})
const {isAuthenticate,token} = useSelector((store)=>store.login)
console.log(isAuthenticate)

  return (
    <div>
        <nav className='navbar'>
            <ul className='navbarclass'>
                <li onClick={()=>(navigate('/'))} >home</li>
                <li onClick={()=>(navigate('/admin'))}>Register users</li>
                <li className='auth1' >{isAuthenticate?
                <div className='auth' ><p >
                    {detail}</p> <p  style={{'color':'white' ,backgroundColor:"black"
                    ,borderRadius:"10px",}} 
           onClick={()=>dispatch(Logout("hello"))} >Logout</p></div>:<p className='userdetail' onClick={()=>navigate("/login")}>
            Login</p>}</li>
                {/* <li onClick={()=>(navigate('/login'))}>{isAuthenticate? "logout":"login"}</li> */}
              
            </ul>
        </nav>
    </div>
  )
}