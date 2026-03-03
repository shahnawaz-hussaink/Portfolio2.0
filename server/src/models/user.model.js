import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    github: {
        type: String,
        required: true,
    },
    linkedin: {
        type: String,
        required: true,
    },
    twitter: {
        type: String,
        required: true,
    },
    instagram: {
        type: String,
        required: true,
    },
    resumeUrl: {
        type: String,
        required: true,
    },
    portfolio: {
        type: string,
    },
    skills: {
        type: String,
        required: true,
    },
    bio: String,
});

export const User = mongoose.model("User", userSchema);
