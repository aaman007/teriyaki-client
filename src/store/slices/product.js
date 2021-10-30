import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    loading: false,
    items: [],
    next: null,
    previous: null
}

const productSlice = createSlice({
    name: 'product',
    initialState: INITIAL_STATE,
    reducers: {
        setLoading: (state, action) => {
            state.loading = true;
        },

        clearLoading: (state, action) => {
            state.loading = false;
        },

        fetchProducts: (state, action) => {
            state.items = action.payload.data;
            state.next = action.payload.next;
            state.previous = action.payload.previous;
        },

        clearProducts: (state, action) => {
            state.items = [];
            state.next = null;
            state.previous = null;
        }
    }
});

export const productActions = productSlice.actions;

export default productSlice;