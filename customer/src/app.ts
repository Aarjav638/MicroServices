import Express from 'express'
import cors from 'cors'
import {PORT} from './config' 
import { dbConnection } from './database/connection';
import Customers from './schema/customer';
import { ComparePassword, HashPassword } from './helper/auth';
const app = Express()

app.use(cors());
app.use(Express.json())
dbConnection()

app.get('/',async(_,res)=>{
    // await Customers.create({
    //     name:'Aarjav',
    //     username:'Aarjav638',
    //     phone:'9520646606',
    //     email:'anshjain638@gmail.com',
    //     password:await HashPassword('Anshjain638@')
    // })
    const user =await Customers.findById({_id:'6878d183b01b4d174f852c6b'})
    console.log(user)
    if(user&&user.password){
 const match  = await ComparePassword('Anshjain638@',user.password)

    console.log(match)
    }
   
    res.status(200).send({
        message:'Success Customer',
        status:200
    })
})


app.listen(PORT,()=>{
    console.log(`Customer server is working on ${PORT}`)
})