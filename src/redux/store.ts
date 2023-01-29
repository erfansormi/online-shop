import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from 'next-redux-wrapper';

// slices
import { productDetaliSlice } from "./productDetail/productDetailSlice";
import { cartSlice } from "./cart/cartSlice";

// reducers
import authReducer from "./user/authSlice";
import dataReducer from "./data/dataSlice";
import cartReducer from "./cart/cartSlice";
import productDetailReducer from "./productDetail/productDetailSlice";

const store = () =>
    configureStore({
        reducer: {
            auth: authReducer,
            data: dataReducer,
            [cartSlice.name]: cartReducer,
            [productDetaliSlice.name]: productDetailReducer
        },
        devTools: true,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false
        })
    });

export type AppStore = ReturnType<typeof store>;
export type State = ReturnType<AppStore['getState']>

export const wrapper = createWrapper<AppStore>(store);