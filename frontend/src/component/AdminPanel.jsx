import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Home.css'

export const AdminPanel = () => {
    const [data,setdata]=useState([])
    const getData=()=>{
        axios.get(`http://35.91.29.76:5000/allUsers`)
        .then((res)=>setdata(res.data))
    }
    useEffect(()=>{
        getData()
    })
  return (
    <div>
{data?.map((el)=>{
    return(
        <div className='admincontainer'>
            <p>{el.email}</p>
        </div>
    )
})}
    </div>
  )
}