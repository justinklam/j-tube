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
      // if there wa no likes before
      if (!state.currentVideo.likes.includes(action.payload)) {
        state.currentVideo.likes.push(action.payload);
        // locate userId index
        state.currentVideo.dislikes.splice(
          state.currentVideo.dislike.findIndex(
            (userId) => userId === action.payload
          ),
          1
        );
      }
    },
  },
});

export const { fetchStart, fetchSuccess, fetchFailure } = videoSlice.actions;

export default videoSlice.reducer;
