import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Route Imports
import userRoutes from "./routes/users.js";

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
app.use("/api/users", userRoutes);

app.listen(port, () => {
  connect();
  console.log(`Server connected at ${port}! 🐅`);
});
