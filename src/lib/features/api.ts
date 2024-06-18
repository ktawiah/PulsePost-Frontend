import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Mutex } from "async-mutex";
import { authenticateUser, logoutUser } from "./auth-slice";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
  credentials: "include",
  baseUrl: backendUrl,
});
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = await baseQuery(
          {
            url: `${backendUrl}/accounts/refresh/`,
            method: "POST",
          },
          api,
          extraOptions
        );
        if (refreshResult.data) {
          api.dispatch(authenticateUser());

          result = await baseQuery(args, api, extraOptions);
        } else {
          api.dispatch(logoutUser());
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};
const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({}),
});

export default api;
