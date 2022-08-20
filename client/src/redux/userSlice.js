import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  // when we click the login button, loading = true
  // if successful or error, it will be false again
  loading: false,
  error: false,
};
