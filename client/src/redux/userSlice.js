import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
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
      state.currentUser = action.payload;
    },
    // else if no user, loginFailure is run
    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = false;
    },
    subscription: (state, action) => {
      // if user's subscribed user contains action.payload(channelId)
      if (state.currentUser.subscribedUsers.includes(action.payload)) {
        state.currentUser.subscribedUser.splice(
          state.currentUser.subscribedUsers.findIndex(
            (channelId) => channelId === action.payload
          )
        );
      }
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;

export default userSlice.reducer;
