import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    orders: []
}

const orderSlice = createSlice({
    name: 'order',
    initialState: INITIAL_STATE,
    reducers: {
        setOrders: (state, action) => {

        },

        clearOrders: (state, action) => {

        }
    }
});

export const orderActions = orderSlice.actions;

export default orderSlice;