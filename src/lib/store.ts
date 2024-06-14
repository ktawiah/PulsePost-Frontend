import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth-slice";
import { accountsSlice } from "./features/accounts-endpoints";
import { postsSlice } from "./features/posts-endpoints";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      accounts: accountsSlice.reducer,
      posts: postsSlice.reducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
