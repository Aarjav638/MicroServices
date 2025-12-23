import Express from 'express'
import cors from 'cors'
import 'dotenv/config'
import Shopping from './schema/shopping';
import { dbConnection } from './database/connection';

const app = Express()

app.use(cors());
app.use(Express.json())
dbConnection()

app.get('/',async(_,res)=>{
   await Shopping.create({
    product_name:'Boat Headphone',
    userEmail:'anshjain638@gmail.com',
    store_name:'Paras Electronics'
   })
    res.status(200).send({
        message:'Success Shopping',
        status:200
    })
})

app.listen(process.env.port,()=>{
    console.log('Shopping server is working')
})