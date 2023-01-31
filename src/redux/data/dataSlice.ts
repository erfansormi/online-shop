import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { State } from "../store";
import { HYDRATE } from "next-redux-wrapper";

// types
interface Rating {
    count: number;
    rate: number;
}

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
    rating: Rating;
    quantity: number;
}

export interface Slider {
    image: string
}

interface InitialState {
    sliders: null | Slider[],
    products: Product[]
}

const initialState: InitialState = {
    sliders: null,
    products: []
}

const dataSlice = createSlice({
    initialState,
    name: "data",
    reducers: {
        getSlidersData: (state, action: PayloadAction<Slider[]>) => {
            state.sliders = action.payload;
        },
        getProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.data,
            };
        },
    }
})

export const useProductsSelector = () => {
    const products = useSelector((state: State) => state.data.products);
    return products
}

export const { getSlidersData, getProducts } = dataSlice.actions;
export default dataSlice.reducer;