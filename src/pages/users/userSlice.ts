import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
};

const slice = createSlice({
  name: "auth",
  initialState: {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    jobTitle: "Developer",
  } as UserState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<UserState>) => {
      return { ...payload };
    },
  },
});

export const { setUser } = slice.actions;

export default slice.reducer;
