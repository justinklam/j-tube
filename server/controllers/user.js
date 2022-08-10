// Helper function
import { createError } from "../error.js";

// Models
import User from "../models/User.js";

export const update = async (req, res, next) => {
  // params id compare to jwt req.user.id
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        // returns newest version of the user with updated info
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "Invalid! You cannot update other Users!"));
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted!");
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "Invalid! You cannot delete other Users!"));
  }
};

export const getUser = async (req, res, next) => {};

export const subscribe = async (req, res, next) => {};

export const unsubscribe = async (req, res, next) => {};

export const like = async (req, res, next) => {};

export const dislike = async (req, res, next) => {};
