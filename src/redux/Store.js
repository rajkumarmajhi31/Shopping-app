import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/cartSlice"; // ensure filename case is correct

export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
  },
});
