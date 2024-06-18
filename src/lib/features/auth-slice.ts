import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthType {
  authType: "reset" | "register" | "login";
}

type InitialState = {
  isAuthenticated: boolean;
  isLoading: boolean;
} & AuthType;

const initialState: InitialState = {
  isAuthenticated: false,
  isLoading: false,
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
