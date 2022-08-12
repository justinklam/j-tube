import express from "express";
import {
  addVideo,
  deleteVideo,
  getVideo,
  updateVideo,
} from "../controllers/video.js";

// Helper Function
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// create a video
router.post("/", verifyToken, addVideo);

router.put("/:id", verifyToken, updateVideo);

router.delete("/:id", verifyToken, deleteVideo);

router.get("/find/:id", getVideo);

router.put("/view/:id", getVideo);

router.get("/trend", getVideo);

router.get("/random", getVideo);

router.get("/subscribe", getVideo);

export default router;
