import "dotenv/config";
import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";

import connectDB from "./db/index.js";
import { app } from "./app.js";

const port = process.env.PORT;

connectDB()
    .then(() => {
        app.on("error", (err) => {
            console.log(`Error : ${err}`);
            throw err;
        });
        app.listen(port || 3000, () => {
            console.log(`Server is listening on PORT : ${port}`);
        });
    })
    .catch((err) => { 
        console.log("MONGODB CONNECTION FAILED !!! ", err);
    });

// console.log(process.env)

// ;(async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     } catch (error) {
//         console.log(`Error : ${error}`)
//         throw error
//     }
// })()
