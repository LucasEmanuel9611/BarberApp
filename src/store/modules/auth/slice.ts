import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./types";

const initialState: AuthState = {
  isAuthenticated: false,
  authError: false,
} as const;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _onLoginSuccess: (state) => {
      state.isAuthenticated = true;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
