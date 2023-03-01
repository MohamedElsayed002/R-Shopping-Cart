

import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import ProductRouter from './src/modules/Product.router.js'



const app = express()
app.use(express.json())
dbConnection()
app.use(ProductRouter)

app.get('/' , (req,res) => {
    res.send("Mohamed ELsayed")
})

app.listen(3000 , () => {
    console.log("Server is running")
})