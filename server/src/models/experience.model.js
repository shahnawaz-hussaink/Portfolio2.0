import mongoose, { Schema } from "mongoose";

const experienceSchema = new Schema(
    {
        companyName: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: [],
        },
        proofImage: {
            type: String,
        },
    },
    { timestamps: true }
);

export const Experience = mongoose.model("Experience", experienceSchema);
