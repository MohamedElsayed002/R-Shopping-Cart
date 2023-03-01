import { ProductModel } from "../../database/models/ProductSchema.js";





export const getProduct = async (req,res) => {
    let users = await ProductModel.find()
    res.json({message : "success", users})
}

export const addProduct = async (req,res) => {
    const {id,title,imageUrl,price,desc,sizes} = req.body
    let product = await ProductModel.insertMany({id,title,imageUrl,price,desc,sizes})
    res.json({message : "success", product})
}

export const deleteProduct = async (req,res) => {
    const {id} = req.params
    let product = await ProductModel.findByIdAndDelete(id)
    res.json({message : "successfly deleted"})
}
