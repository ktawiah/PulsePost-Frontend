import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { accountsSlice } from "./features/accounts-endpoints";
import authReducer from "./features/auth-slice";
import { postsSlice } from "./features/posts-endpoints";
import customStorage from "./features/storage";

const authPersistConfig = {
  key: "auth",
  storage: customStorage,
};

const accountsPersistConfig = {
  key: "accounts",
  storage: customStorage,
};

const postsPersistConfig = {
  key: "posts",
  storage: customStorage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  accounts: persistReducer(accountsPersistConfig, accountsSlice.reducer),
  posts: persistReducer(postsPersistConfig, postsSlice.reducer),
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};

export const store = makeStore();
export const persistor = persistStore(store);

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
