import { configureStore } from "@reduxjs/toolkit";

// reducers
import authReducer from "./user/authSlice";
import dataReducer from "./data/dataSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        data: dataReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export type State = ReturnType<typeof store.getState>