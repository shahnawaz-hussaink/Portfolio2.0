import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localfilePath) => {
    try {
        if (!localfilePath) return null; // no file path provided

        const response = await cloudinary.uploader.upload(localfilePath, {
            resource_type: "auto",
        });
        console.log("File is uploaded to Cloudinary", response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localfilePath);
        return null;
    }
};
