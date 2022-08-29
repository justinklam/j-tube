// Models
import User from "../models/User.js";
import Video from "../models/Video.js";

// Helper Function
import { createError } from "../error.js";

export const addVideo = async (req, res, next) => {
  const newVideo = new Video({ userId: req.user.id, ...req.body });

  try {
    const savedVideo = await newVideo.save();
    res.status(200).json(savedVideo);
  } catch (err) {
    next(err);
  }
};

export const updateVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return next(createError(404, "Video not found!"));
    if (req.user.id === video.userId) {
      const updatedVideo = await Video.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedVideo);
    } else {
      return next(createError(403, "You cannot update other user's videos!"));
    }
  } catch (err) {
    next(err);
  }
};

// Incomplete
export const deleteVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return next(createError(404, "Video not found!"));
    if (req.user.id === video.userId) {
      const updatedVideo = await Video.findByIdAndDelete(req.params.id);
      res.status(200).json("The video has been successfully deleted!");
    } else {
      return next(createError(403, "You cannot delete other user's videos!"));
    }
  } catch (err) {
    next(err);
  }
};

export const getVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    res.status(200).json(video);
  } catch (err) {
    next(err);
  }
};

export const addView = async (req, res, next) => {
  try {
    const video = await Video.findByIdAndUpdate(req.params.id, {
      // increment views properties by 1
      $inc: { views: 1 },
    });
    res.status(200).json("The viewcount has been increased!");
  } catch (err) {
    next(err);
  }
};

export const random = async (req, res, next) => {
  try {
    // MongoDB query to aggregate and locate a sample of 40
    const videos = await Video.aggregate([{ $sample: { size: 40 } }]);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

export const trend = async (req, res, next) => {
  try {
    // sort to locate the most viewed videos
    const videos = await Video.find().sort({ views: -1 });
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

export const sub = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const subscribedChannels = user.subscribedUsers;

    // promise is used to locate all the channels
    const list = await Promise.all(
      subscribedChannels.map((channelId) => {
        // return if userId is equal to channelId
        return Video.find({ userId: channelId });
      })
    );

    res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
  } catch (err) {
    next(err);
  }
};

export const getByTag = async (req, res, next) => {
  // query targets addressbar info
  // ie. api/videos/tags?tags=js,py,c
  const tags = req.query.tags.split(",");

  try {
    // check inside the array, look for specific element
    const videos = await Video.find({ tags: { $in: tags } }).limit(20);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

export const search = async (req, res, next) => {
  const query = req.query.q;
  try {
    // option "i" = lower case or uppercase
    const videos = await Video.find({
      title: { $regex: query, $options: "i" },
    }).limit(40);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};
