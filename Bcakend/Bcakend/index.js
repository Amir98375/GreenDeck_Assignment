const express = require("express")
require("dotenv").config()
//const mongoose = require('mongoose')
const connect = require("./src/configs/db")
const userController= require("./src/controller/user.controller")
const User = require("./src/models/user.model")
const {register,login,loggedUser,finduser} = require("./src/controller/auth.controller")
const authenticate=require("./src/middleware/authenticate")
let cors = require("cors");


const app = express();
app.use(cors());
app.use(express.json())
app.use("/users",userController)
app.post("/register", register)
app.post("/login",login)
app.get("/allUsers",finduser)
app.get("/loggedUser",authenticate,loggedUser)
// app.use("/products",productController)

app.listen(5000,async()=>{
   try {
    await connect()
    console.log("listening on port 5000")
   } catch (error) {
       console.log(error.message)
   }
})