import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReAuth } from "../baseQuery";
import { baseUrl } from "../config";
import { RootState } from "../store";

export interface User {
  first_name: string;
  last_name: string;
}

export interface UserResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export const usersService = createApi({
  reducerPath: "users-service",
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    users: builder.query({
      query: (page) => `users?page=${page}`,
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: "users",
        method: "POST",
        body: user,
      }),
    }),
    updateUser: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body: rest,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useUsersQuery,
} = usersService;
