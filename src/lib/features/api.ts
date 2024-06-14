import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { Mutex } from "async-mutex";
import { authenticateUser, logoutUser } from "./auth-slice";

// create a new mutex
const mutex = new Mutex();
const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.API_BASE_URL}`,
  credentials: "include",
});
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // checking whether the mutex is locked
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshResult = await baseQuery(
          "/refreshToken",
          api,
          extraOptions
        );
        if (refreshResult.data) {
          // TODO: Pass token to verify endpoint
          // api.dispatch(tokenReceived(refreshResult.data));
          api.dispatch(authenticateUser());
          // retry the initial query
          result = await baseQuery(args, api, extraOptions);
        } else {
          // TODO: Call Logout Action here
          api.dispatch(logoutUser());
        }
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
    } else {
      // wait until the mutex is available without locking it
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
