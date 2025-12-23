import mongoose from "mongoose";
import { dbUrl } from "../config";


export const dbConnection = async()=>{
try {
    if(dbUrl){
await mongoose.connect(dbUrl,{
    dbName:'customers',
    
}) 
console.log('DB Connected Successfully ')
    }
    else{
        console.log("NO DB URL FOUND, Unable to connect")
    }
    
} catch (error) {
    console.error(error)
}
}