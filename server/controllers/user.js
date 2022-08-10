import { createError } from "../error";

export const update = (req, res, next) => {
  // params id compare to jwt req.user.id
  if (req.params.id === req.user.id) {
  } else {
    return next(createError(403, "Invalid! You cannot update other Users!"));
  }
};

export const deleteUser = (req, res, next) => {};

export const getUser = (req, res, next) => {};

export const subscribe = (req, res, next) => {};

export const unsubscribe = (req, res, next) => {};

export const like = (req, res, next) => {};

export const dislike = (req, res, next) => {};
