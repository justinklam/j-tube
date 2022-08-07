import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// Model
import User from "../models/User";

export const signup = async (req, res) => {
  // console.log(req.body);
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, hash });
  } catch (err) {}
};
