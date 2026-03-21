import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./features/tokenSlice";
import cartSlice from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    tokenSlice,
    cartSlice,
  },
});

export type tokenState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof store.getState>;
