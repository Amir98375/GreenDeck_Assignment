
const initState = 
{
    role: sessionStorage.getItem("loggedUserRole") ||"",
    email: sessionStorage.getItem("loggedUserEmail") || ""
}

 export  const userReducer  = (state=initState,{type,payload})=>{
    switch (type) {
        case "SUCCESS":{
            // console.log(payload.role[0],"reducer-user get user")
            sessionStorage.setItem("loggedUserRole",payload.role[0])
            
            sessionStorage.setItem("loggedUserEmail",payload.email)
            return{
                ...state,
                userrole:payload.role,
                email:payload.email
            }
        }
        default:
            return state;
    }
 }