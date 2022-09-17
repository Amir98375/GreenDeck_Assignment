import axios from "axios"

export const userSuccess=(payload)=>({
    type:"SUCCESS",
    payload
})

export const getUser=(token)=>(dispatch)=>{
    // console.log(token)
    axios.get(`http://localhost:5000/loggeduser`,{
        headers:{
            "Authorization" : `Bearer ${token}`
        }
    })
    .then((res)=>{
        // console.log('getuse details',res.data.user);
        dispatch(userSuccess({role:res.data.user.role,email:res.data.user.email}))
    })
    .catch((err)=> console.log(err));
}