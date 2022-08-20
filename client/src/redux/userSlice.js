import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  // when we click the login button, loading = true
  // if successful or error, it will be false again
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    // if user is found, this is run
    loginSuccess: (state, action) => {
      state.loading = true;
      state.user = action.payload;
    },
    // else if no user, loginFailure is run
    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
      state.user = null;
      state.loading = false;
      state.error = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;
