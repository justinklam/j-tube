import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentVideo: null,
  // when we click the login button, loading = true
  // if successful or error, it will be false again
  loading: false,
  error: false,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    // if user is found, this is run
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.currentVideo = action.payload;
    },
    // else if no user, loginFailure is run
    fetchFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    like: (state, action) => {
      // if there was no likes before
      if (!state.currentVideo.likes.includes(action.payload)) {
        state.currentVideo.likes.push(action.payload);
        // locate userId index
        state.currentVideo.dislikes.splice(
          state.currentVideo.dislikes.findIndex(
            (userId) => userId === action.payload
          ),
          1
        );
      }
    },
    dislike: (state, action) => {
      // if there was no likes before
      if (!state.currentVideo.dislikes.includes(action.payload)) {
        state.currentVideo.dislikes.push(action.payload);
        // locate userId index
        state.currentVideo.likes.splice(
          state.currentVideo.likes.findIndex(
            (userId) => userId === action.payload
          ),
          1
        );
      }
    },
  },
});

export const { fetchStart, fetchSuccess, fetchFailure, like, dislike } =
  videoSlice.actions;

export default videoSlice.reducer;
