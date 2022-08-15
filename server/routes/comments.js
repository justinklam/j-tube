import express from "express";
import {
  addComment,
  deleteComment,
  getComments,
} from "../controllers/comment.js";

// Helper function
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// add a comment
router.post("/", verifyToken, addComment);

// delete a comment
router.delete("/:id", verifyToken, deleteComment);

// get all comments for a video
router.get("/:videoId", getComments);

export default router;
