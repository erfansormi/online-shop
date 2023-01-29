import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { useSelector } from "react-redux";

// functions
import { priceCalculator, totalPriceCalculator } from "../../components/functions/cart/cartFunctions";

// types
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../data/dataSlice";
import { State } from "../store";

interface InitialState {
    products: Product[],
    totalPrice: number,
    totalCount: number
}

const initialState: InitialState = {
    products: [],
    totalPrice: 0,
    totalCount: 0
}

export const cartSlice = createSlice({
    initialState,
    name: "cart",
    reducers: {

        addToCart: (state, action: PayloadAction<Product>) => {
            state.products.find(item => item.id === action.payload.id) ?
                null :
                state.products.push({
                    ...action.payload,
                    quantity: 1
                })

            // total price
            state.totalPrice = totalPriceCalculator(state.products);
        },

        removeFromCart: (state, action: PayloadAction<Product>) => {
            const updatedProducts = state.products.filter(item => item.id !== action.payload.id);
            state.products = updatedProducts;

            // total price
            state.totalPrice = totalPriceCalculator(state.products);
        },

        increaseItem: (state, action: PayloadAction<Product>) => {
            const index = state.products.findIndex(item => item.id === action.payload.id);
            state.products[index].quantity++;

            // update price
            state.products[index].price = priceCalculator(state.products, action.payload);

            // total price
            state.totalPrice = totalPriceCalculator(state.products);
        },

        decreaseItem: (state, action: PayloadAction<Product>) => {
            const index = state.products.findIndex(item => item.id === action.payload.id);
            state.products[index].quantity--;

            // update price
            state.products[index].price = priceCalculator(state.products, action.payload);

            // total price
            state.totalPrice = totalPriceCalculator(state.products);
        }
    },

    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.cart,
            };
        },
    }
})

// cart custom hook
export const useCartSelector = () => {
    return useSelector((state: State) => state.cart)
}

// actions & reducer
export const { addToCart, removeFromCart, decreaseItem, increaseItem } = cartSlice.actions;
export default cartSlice.reducer;