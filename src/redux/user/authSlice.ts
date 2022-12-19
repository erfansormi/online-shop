import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

interface InitialState {
    user: null | User
}

const initialState: InitialState = {
    user: null
}

const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUserData: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        logoutUser: (state) => {
            state.user = null;
        }
    }
})


export const { getUserData, logoutUser } = authSlice.actions;
export default authSlice.reducer;