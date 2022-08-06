import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Route Imports
import commentRoutes from "./routes/comments.js";
import userRoutes from "./routes/users.js";
import videoRoutes from "./routes/videos.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 8000;

const connect = () => {
  mongoose
    .connect(process.env.MONGODB)
    .then(() => {
      console.log(`MongoDB connected! 🐯`);
    })
    .catch((error) => {
      throw error;
    });
};

// Routes
app.use("/api/comments", commentRoutes);
app.use("/api/users", userRoutes);
app.use("/api/video", videoRoutes);

app.listen(port, () => {
  connect();
  console.log(`Server connected at ${port}! 🐅`);
});
