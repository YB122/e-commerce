import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./features/tokenSlice";

export const store = configureStore({
  reducer: {
    tokenSlice,
  },
});

export type tokenState = ReturnType<typeof store.getState>;
