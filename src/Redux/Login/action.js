import axios from "axios"

export const authActions={
    LOADING:"LOGIN_LOADING",
    SUCCESS:"LOGIN_SUCCESS",
    FAILURE:"LOGIN_FAILURE",
    LOGOUT:"LOGOUT"
   
    }

export const loginLoading=()=>({
     type:authActions.LOADING
})
export const loginSuccess=(payload)=>({
    type:authActions.SUCCESS,
    payload
})
export const loginFailure=()=>({
    type:authActions.FAILURE
})

export const logout=()=>({
    type:"LOGOUT"
})


export const login=(payload)=>(dispatch)=>{
    dispatch(loginLoading());

    console.log(payload,'from payload action');
    
    axios.post(`http://localhost:5000/login`,payload)
    .then((res)=>{
        console.log(res,"action")
        alert("signin")
        
        dispatch(loginSuccess({token:res.data.token}))
       
    })
    .catch((err)=> {
        alert("wrong email or password")
        dispatch(loginFailure())
    })
}
export const Logout=(payload)=>{
    console.log("logoutcalled",payload)
    return{
        type:authActions.LOGOUT
    }
}