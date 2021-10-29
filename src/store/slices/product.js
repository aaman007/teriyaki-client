import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    products: []
}

const productSlice = createSlice({
    name: 'product',
    initialState: INITIAL_STATE,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },

        clearProducts: (state, action) => {
            state.products = []
        }
    }
});

export const productActions = productSlice.actions;

export default productSlice;