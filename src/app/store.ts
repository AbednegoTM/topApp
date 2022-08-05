import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import authReducer from "../pages/auth/authSlice";
import { authService } from "./services/auth";
import { usersService } from "./services/users";
const store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
    [usersService.reducerPath]: usersService.reducer,
    auth: authReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
