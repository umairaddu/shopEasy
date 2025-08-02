import express from "express";
import dotenv from "dotenv";

const app=express();
console.log(app)

dotenv.config()
const port=process.env.PORT||5000


app.listen(port,()=>{
    console.log(`server started at port number ${port}`);
    
})
