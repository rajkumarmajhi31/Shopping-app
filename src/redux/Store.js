import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import { CartSlice } from "./Slices/CartSlice";

export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
=======
import { CartSlice } from "./Slices/cartSlice";

export const store = configureStore({
    reducer : {
        cart : CartSlice.reducer,
>>>>>>> d3fccb7769defd5c6e3ea0ff361284b7b296a1a8
    }
});