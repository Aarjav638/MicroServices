import mongoose, { Schema } from "mongoose";


const CustomerSchema = new Schema({
    name:String,
    phone:String,
    password:String,
    email:String,
    username:String ,
})

const Customers =  mongoose.model('Customers',CustomerSchema);

export default Customers;