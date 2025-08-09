


const getAllProducts=(req,res)=>{
res.status(200).json({message:"All products"})
}


const getSingleProduct=(req,res)=>{
res.status(200).json({message:"single products"})
}


export {getAllProducts,getSingleProduct}