import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminPanel } from './AdminPanel'
import { Home } from './Home'
import { Login } from './Login'
import { Signup } from './Signup'
export const AllRoutes = () => {
  return (
    <div>
      
        <Routes>
        
            <Route path='/login' element={<Signup/>}/>
            <Route path='/signup'  element={<Login/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/admin' element={<AdminPanel/>}/>
        </Routes>
    </div>
  )
}