import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// types
import { Product } from "../data/dataSlice";

interface InitialState {
    product: Product | null
}

const initialState: InitialState = {
    product: null
}

export const productDetaliSlice = createSlice({
    initialState,
    name: "productDetail",
    reducers: {
        getProductDetail: (state, action: PayloadAction<Product>) => {
            state.product = action.payload;
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.productDetail,
            };
        },
    },
})

export const { getProductDetail } = productDetaliSlice.actions;
export default productDetaliSlice.reducer;