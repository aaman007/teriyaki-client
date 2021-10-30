import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    items: [],
    totalAmount: 0,
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action) => {
            const { name, price, description, sku } = action.payload;
            state.totalAmount += price;
            state.totalQuantity++;

            const existing = state.items.find(item => item.sku === sku);
            if (existing) {
                existing.quantity++;
                existing.amount += price;
            }
            else {
                state.items.push({
                    name, price, description, sku,
                    amount: price,
                    quantity: 1
                });
            }
        },

        removeFromCart: (state, action) => {

        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;