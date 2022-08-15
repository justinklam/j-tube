// Models
import Video from "../models/Video.js";
import Comment from "../models/Comment.js";

export const addComment = async (req, res, next) => {
  const newComment = new Comment({ ...req.body, userId: req.user.id });
  try {
    const savedComment = await newComment.save();
    res.status(200).send(savedComment);
  } catch (err) {
    next(err);
  }
};

export const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(res.params.id);
    const video = await Video.findById(res.params.id);
  } catch (err) {
    next(err);
  }
};

export const getComments = async (req, res, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
