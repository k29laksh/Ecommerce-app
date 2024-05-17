import path from "path";
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js"

import { connectDB } from "./config/db.js";

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true,limit:"50kb"}))
app.use(cookieParser());

app.use("/api/v1/users", userRoutes);

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`SERVER STARTED AT PORT: ${port}`);
    });
  })
  .catch((err) => {
    console.log("MongoDb connection error", err);
  });
