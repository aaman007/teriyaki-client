import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./slices/auth";
import uiSlice from "./slices/ui";
import productSlice from "./slices/product";
import orderSlice from "./slices/order";
import cartSlice from "./slices/cart";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        ui: uiSlice.reducer,
        product: productSlice.reducer,
        order: orderSlice.reducer,
        cart: cartSlice.reducer
    },
    devTools: true
});

export default store;