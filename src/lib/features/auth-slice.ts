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
    finishInitialLoading: (state) => {
      state.isLoading = false;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
    },
    setAuthType: (state, action: PayloadAction<InitialState["authType"]>) => {
      state.authType = action.payload;
    },
  },
});

export const {
  authenticateUser,
  finishInitialLoading,
  logoutUser,
  setAuthType,
} = authSlice.actions;
export default authSlice.reducer;
