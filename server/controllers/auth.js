import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// Helper function
import { createError } from "../error.js";

// Model
import User from "../models/User";

export const signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, hash });

    await newUser.save();
    res.status(200).send("User has been created!");
  } catch (err) {
    next(err);
  }
};

export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({
      name: req.body.name,
    });
    if (!user) return next(createError(404, "User not found!"));
  } catch (err) {
    next(err);
  }
};
