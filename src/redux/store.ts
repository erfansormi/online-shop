import { configureStore } from "@reduxjs/toolkit";

// reducers
import authReducer from "./user/authSlice";
import dataReducer from "./data/dataSlice";
import cartReducer from "./cart/cartSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        data: dataReducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});

export type State = ReturnType<typeof store.getState>