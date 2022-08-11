import express from "express";
import { addVideo } from "../controllers/video.js";

// Helper Function
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// create a video
router.post("/", verifyToken, addVideo);

export default router;
