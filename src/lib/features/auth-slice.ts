import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    isLoading: false,
  },
  reducers: {
    authenticateUser: (state) => {
      state.isAuthenticated = true;
    },
    finishInitialLoading: (state) => {
      state.isLoading = false;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { authenticateUser, finishInitialLoading, logoutUser } =
  authSlice.actions;
export default authSlice.reducer;
