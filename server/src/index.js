import 'dotenv/config'
import mongoose from 'mongoose';
import { DB_NAME } from './constant.js';

import connectDB from './db/index.js';

connectDB()
// console.log(process.env)





// ;(async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     } catch (error) {
//         console.log(`Error : ${error}`)
//         throw error
//     }
// })()