import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  isAuthenticated: boolean;
  authType: "reset" | "register" | "login";
}

const initialState: InitialState = {
  isAuthenticated: false,
  authType: "login",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    authenticateUser: (state) => {
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { authenticateUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
