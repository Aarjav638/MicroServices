import mongoose, { Schema } from "mongoose";


const ShopppingSchema = new Schema({
    product_name:String,
    store_name:String,
    userEmail:String ,
})

const Shopping =  mongoose.model('Shopping',ShopppingSchema);

export default Shopping;