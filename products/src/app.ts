import Express from 'express'
import cors from 'cors'
import 'dotenv/config'
import Products from './schema/products';
import { dbConnection } from './database/connection';

const app = Express()

app.use(cors());
app.use(Express.json())

dbConnection()
app.get('/',async(_,res)=>{
    await Products.create({
        name:'Boat Headphones',
        price:2500
    })
    res.status(200).send({
        message:'Success Products',
        status:200
    })
})

app.listen(process.env.port,()=>{
    console.log('Products Server is working')
})