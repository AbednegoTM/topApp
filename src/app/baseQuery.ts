import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./config";
import { RootState } from "./store";

export const baseQueryWithReAuth = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
