import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

export const Navbar = () => {
    const [detail,setdetail]=useState([])
    const navigate=useNavigate()
    const data=useSelector((state)=>state.user)
useEffect(()=>{
    setdetail(data.email)
})
const {isAuthenticate,token} = useSelector((store)=>store.login)

  return (
    <div>
        <nav className='navbar'>
            <ul className='navbarclass'>
                <li onClick={()=>(navigate('/'))} >home</li>
                <li onClick={()=>(navigate('/admin'))}>Admin Pannel</li>
                <li onClick={()=>(navigate('/login'))}>{isAuthenticate? detail:"login"}</li>
              
            </ul>
        </nav>
    </div>
  )
}