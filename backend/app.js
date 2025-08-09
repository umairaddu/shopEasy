import express from "express";
import dotenv from "dotenv";
import routers from "./routes/productRoutes.js";

const app=express();

dotenv.config()
const port=process.env.PORT||5000

// meddlewares
app.use(express.json())

app.use("/",routers)




app.listen(port,()=>{
    console.log(`server started at port number ${port}`);
    
})
