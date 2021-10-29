import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    items: [],
    totalAmount: [],
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action) => {

        },

        removeFromCart: (state, action) => {

        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;