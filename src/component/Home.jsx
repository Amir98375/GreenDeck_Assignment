import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Home.css'
export const Home = () => {
    const [data,setdata]=useState([])
    useEffect(()=>{
        getData()
    },[])
    const getData=()=>{
        axios.get(`https://my-json-server-masai.herokuapp.com/Gujrat`)
        .then((res)=>setdata(res.data))
    }
  return (
    <div  className='containerhome'>
        {data?.map((el)=>{
            return(
                <div>
                <div className='under'>
                    <img className='image' src={el.image} alt="" />
                    <div className='under1'>
              <span>price:{el.price}</span>
              <span>Area:{el.Area}</span>
               </div>
               
                </div>
            </div>
            )
        })}
    </div>
  )
}