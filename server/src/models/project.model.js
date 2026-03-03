import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
    {
        projectTitle: {
            type: String,
            required: true,
        },
        projectDescription: {
            type: String,
            required: true,
        },
        techStack: {
            type: [],
            required: true,
        },
        githubRepo: {
            type: String,
            required: true,
        },
        liveUrl: {
            type: String,
            required: true,
        },
        projectImage: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const Project = mongoose.model("Project", projectSchema);
