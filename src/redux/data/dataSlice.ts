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
    category: string;
    image: string;
    rating: Rating;
}

export interface Slider {
    image: string
}

interface InitialState {
    sliders: null | Slider[],
}

const initialState: InitialState = {
    sliders: null,
}

const dataSlice = createSlice({
    initialState,
    name: "data",
    reducers: {
        getSlidersData: (state, action: PayloadAction<Slider[]>) => {
            state.sliders = action.payload;
        }
    }
})

export const { getSlidersData } = dataSlice.actions;
export default dataSlice.reducer;