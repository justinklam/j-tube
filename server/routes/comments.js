import express from "express";
import { addComment } from "../controllers/comment.js";

// Helper function
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, addComment);

export default router;
