import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export const Navbar = () => {
    const [detail,setdetail]=useState([])
    const data=useSelector((state)=>state.user)
useEffect(()=>{
    setdetail(data.email)
})
const {isAuthenticate,token} = useSelector((store)=>store.login)

  return (
    <div>
        <nav className='navbar'>
            <ul className='navbarclass'>
                <li>home</li>
                <li>Admin Pannel</li>
                <li>{isAuthenticate? detail:"login"}</li>
              
            </ul>
        </nav>
    </div>
  )
}