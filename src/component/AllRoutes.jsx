import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AdminPanel } from './AdminPanel'
import { Home } from './Home'
import { Login } from './Login'
import { Signup } from './Signup'
export const AllRoutes = () => {

  const {isAuthenticate,token} = useSelector((store)=>store.login)
console.log(isAuthenticate,"route")


const PrivateRoute = ({isAuthenticate,children}) =>{
  return isAuthenticate? children :<Navigate to={'/login'}/>
}

  return (
    <div>
      
        <Routes>
        
            <Route path='/login' element={<Signup/>}/>
            <Route path='/signup'  element={<Login/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path={"/admin"} element={
            <PrivateRoute isAuthenticate={isAuthenticate}>

                <AdminPanel/>
            </PrivateRoute>
          
          }/>
         
        </Routes>
    </div>
  )
}