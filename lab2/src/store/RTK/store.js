import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../RTK/cartSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
})