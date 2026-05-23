import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    cartItems: [],
}
const cartSlice = createSlice({
    name: "cart",
    initialState: intialState,
    // actions
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...item, quantity: 1 });
            }
        },

        removeFromCart: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== itemId);
        },
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;