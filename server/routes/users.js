import express from "express";
import { update } from "../controllers/user.js";

const router = express.Router();

// update user
router.put("/:id", update);

// delete user

// get a user

// subscribe a user

// unsubscribe a user

// like a video

// dislike a video

export default router;
