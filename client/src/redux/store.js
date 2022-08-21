import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});

// To use Access Points
// storage
// user
// currentUser, loading, error
