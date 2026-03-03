import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async function () {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );
        console.log(
            `MONGODB CONNECTED || DB_HOST : ${connectionInstance.connection.host}`
        );
        // console.log(connectionInstance);
    } catch (error) {
        console.log(`MONGODB CONNECTION FAILED : ${error}`);
        process.exit(1);
    }
};

export default connectDB;
