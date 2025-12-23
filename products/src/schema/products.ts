import mongoose, { Schema } from "mongoose";


const productsSchema = new Schema({
    name:String,
    price:Number ,
})

const Products =  mongoose.model('Products',productsSchema);

export default Products;