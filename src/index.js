//require('dotenv').config()
import dotenv from "dotenv"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})
connectDB()


/*
import express from "express";
const app = express()
// function connectDB(){}
// connectDB()

( async() => {
    try{
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.on("error", (error) => {
        console.log("ERROR", error);
        throw error
       })

       app.listen(process.env.PORT, () => {
        console.log(`App is listening on part ${process.env.PORT}`);
       })
    }
    catch(error){
        console.log("ERROR: ",error)
    }
})()// professionals usse ; in front because they forget to keep
*/