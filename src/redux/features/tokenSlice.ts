import { createSlice } from "@reduxjs/toolkit";

export interface TokenState {
  token: string | null;
}

const tokenSlice = createSlice({
  name: "userToken",
  initialState: {
    token: localStorage.getItem("token"),
  } as TokenState,
  reducers: {
    setToken(state) {
      state.token = localStorage.getItem("token");
    },
    removeToken(state) {
      state.token = null;
    },
  },
});

export default tokenSlice.reducer;
export const { setToken, removeToken } = tokenSlice.actions;
