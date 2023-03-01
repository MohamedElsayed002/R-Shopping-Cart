


import mongoose from 'mongoose'


const ProductSchema = mongoose.Schema({

    id : String,
    title : String,
    imageUrl : String,
    price : Number,
    desc : String,
    sizes : [String]
}, {
    timeStamps : true
})


export const ProductModel = mongoose.model('Product',ProductSchema)