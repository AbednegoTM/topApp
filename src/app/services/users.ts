import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../baseQuery";

export interface Users {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserData[];
}
export interface SingleUser {
  data: UserData;
}
export interface UserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  jobTitle?: string;
}

export const usersService = createApi({
  reducerPath: "users-service",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    users: builder.query<Users, number>({
      query: (page) => `users?page=${page}`,
    }),
    getUserById: builder.query<SingleUser, string>({
      query: (id) => `users/${id}`,
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
  useGetUserByIdQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useUsersQuery,
} = usersService;
