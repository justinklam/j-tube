import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.listen(8080, () => {
  console.log("Server connected! 🐅");
});
