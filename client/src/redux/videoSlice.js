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
      state.loading = true;
      state.currentUser = action.payload;
    },
    // else if no user, loginFailure is run
    fetchFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchFailure, logout } =
  videoSlice.actions;

export default videoSlice.reducer;
