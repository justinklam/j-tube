import express from "express";
import {
  addVideo,
  addView,
  deleteVideo,
  getByTag,
  getVideo,
  random,
  search,
  sub,
  trend,
  updateVideo,
} from "../controllers/video.js";

// Helper Function
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// create a video
router.post("/", verifyToken, addVideo);

// update a video
router.put("/:id", verifyToken, updateVideo);

// delete a video
router.delete("/:id", verifyToken, deleteVideo);

// get video
router.get("/find/:id", getVideo);

// increase viewcount for video
router.put("/view/:id", addView);

// get trending video
router.get("/trend", trend);

// get random videos
router.get("/random", random);

// subscribe to a video
router.get("/sub", verifyToken, sub);

// get videos by tags
router.get("/tags", getByTag);

// search for a video
router.get("/search", search);

export default router;
