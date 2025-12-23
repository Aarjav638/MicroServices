import { config } from "dotenv";


const fileUrl = `.env.${process.env.NODE_ENV}`

config({path:fileUrl})

export const PORT = process.env.port||3002
export const dbUrl = process.env.mongodb_uri