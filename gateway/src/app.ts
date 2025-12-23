import Express from 'express'
import cors from 'cors'
import 'dotenv/config'
import proxy from 'express-http-proxy'
const app = Express()

app.use(cors());
app.use(Express.json())

app.use('/customer',proxy('http://localhost:3002/'))
app.use('/products',proxy('http://localhost:3001/'))
app.use('/shopping',proxy('http://localhost:3000/'))
app.listen(process.env.port,()=>{
    console.log('Gateway server is working')
})