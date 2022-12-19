import { configureStore } from "@reduxjs/toolkit";

// reducers
import authReducer from "./user/authSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export type State = ReturnType<typeof store.getState>