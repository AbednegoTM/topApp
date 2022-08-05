import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  id: string | null;
  token: string | null;
};

const slice = createSlice({
  name: "auth",
  initialState: { id: null, token: null } as AuthState,
  reducers: {
    setCredentials: (
      state,
      { payload: { id, token } }: PayloadAction<{ id: string; token: string }>
    ) => {
      state.id = id;
      state.token = token;
    },
    loggedOut: () => {
      localStorage.clear();
      return { id: null, token: null };
    },
  },
});

export const { setCredentials, loggedOut } = slice.actions;

export default slice.reducer;

