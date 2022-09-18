import axios from "axios"



export const authActions={
    LOADING:"SIGNUP_LOADING",
    SUCCESS:"SIGNUP_SUCCESS",
    FAILURE:"SIGNUP_FAILURE"
    }

export const signupLoading=()=>({
     type:authActions.LOADING
})
export const signupSuccess=(payload)=>({
    type:authActions.SUCCESS,
    payload
})
export const signupFailure=()=>({
    type:authActions.FAILURE
})

export const registerUser=(payload)=>(dispatch)=>{
    
    dispatch(signupLoading());
    console.log('signupdataaconsole',payload);
    axios.post("http://35.91.29.76:5000/register",payload)
    .then((res)=>{
        dispatch(signupSuccess());
        alert("signup")
      
        console.log('ok');
    })
    .catch((err)=>{
        console.log('sighn err',err);
        dispatch(signupFailure());
        alert("wrong credentials")
    })
}