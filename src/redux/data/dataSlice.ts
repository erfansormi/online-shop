import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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
    discountPercentage?: number;
    category: string;
    image: string;
    images: string[];
    rating: Rating;
    type: string;
    brand: string;
}

export interface Slider {
    image: string
}

interface InitialState {
    sliders: null | Slider[],
    products: null | Product[],
    newProducts: null | Product[],
    offer: null | Product[],
}

const initialState: InitialState = {
    sliders: null,
    products: null,
    newProducts: null,
    offer: null
}

const dataSlice = createSlice({
    initialState,
    name: "data",
    reducers: {
        getSlidersData: (state, action: PayloadAction<Slider[]>) => {
            state.sliders = action.payload;
        },
        getProductsData: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
        },
        getNewProductsData: (state, action: PayloadAction<Product[]>) => {
            state.newProducts = action.payload;
        },
        getOfferData: (state, action: PayloadAction<Product[]>) => {
            state.offer = action.payload;
        },
    }
})

export const { getProductsData, getSlidersData, getNewProductsData, getOfferData } = dataSlice.actions;
export default dataSlice.reducer;