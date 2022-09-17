import {applyMiddleware, combineReducers, compose, legacy_createStore} from "redux"

import thunk from "redux-thunk"
import { userReducer } from "./Redux/Getuser/reducer";
import { authReduce } from "./Redux/Login/reducer";
import { signupReducer } from "./Redux/SignUp/reducer";

const root = combineReducers({
    signup:signupReducer,
  
    login:authReduce,
    user:userReducer
})

const composeEnhancer= window._REDUX_DEV_TOOLS_EXTENSION_COMPOSE||compose;
export const store=legacy_createStore(root,composeEnhancer(applyMiddleware(thunk)))
// console.log(store.getState())