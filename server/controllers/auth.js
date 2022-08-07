import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// Model
import User from "../models/User";

export const signup = async (req, res) => {
  // console.log(req.body);
  try {
    const newUser = new User({ ...req.body });
  } catch (err) {}
};
