

import express from 'express'
import { getProduct , addProduct , deleteProduct } from './Product.controller.js'


const ProductRouter = express.Router()

ProductRouter.get('/allUsers',getProduct)
ProductRouter.post('/addProduct',addProduct)
ProductRouter.delete('/deleteProduct/:id' , deleteProduct)




export default ProductRouter