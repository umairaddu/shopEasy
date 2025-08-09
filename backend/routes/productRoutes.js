import express from "express"
import { getAllProducts, getSingleProduct } from "../controller/productController.js"

const routers =express.Router()

//routes

routers.get("/api/v1/products",getAllProducts)

routers.get("/api/v1/product",getSingleProduct)


export default  routers 