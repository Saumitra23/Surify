import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSession: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state) => {
      state.isSession = true;
    },
    logout: (state) => {
      state.isSession = false;
      window.localStorage.removeItem("token");
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
