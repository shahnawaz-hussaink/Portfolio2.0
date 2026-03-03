import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const limit_size = "16kb";

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(
    express.json({
        limit: limit_size,
    })
);

app.use(express.urlencoded({ extended: true, limit: limit_size }));

app.use(express.static("public"));

app.use(cookieParser())

export { app };
