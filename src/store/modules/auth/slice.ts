import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./types";

const initialState: AuthState = {
  isAuthenticated: false,
} as const;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _onLoginSuccess: (state) => {
      state.isAuthenticated = true;
    },
    clearAuthData() {
      return initialState;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
