import { Product } from "../../redux/data/dataSlice"

export type SortBy = "most relevant" | "cheapest" | "expensivest" | "best seller" | "Buyers' suggestion"

interface SortData {
    title: SortBy
}

export const sortByData: SortData[] = [
    {
        title: "most relevant",
    },
    {
        title: "cheapest",
    },
    {
        title: "expensivest"
    },
    {
        title: "best seller"
    },
    {
        title: "Buyers' suggestion"
    }
]

// sort functions
export const sortByRelevant = (products: Product[]) => {
    const sorted = products.sort((a, b) => a.id - b.id)
    return sorted;
}

export const sortByCheapest = (products: Product[]) => {
    const sorted = products.sort((a, b) => a.price - b.price)
    return sorted;
}

export const sortByExpensivest = (products: Product[]) => {
    const sorted = products.sort((a, b) => b.price - a.price)
    return sorted;
}

export const sortByBestSeller = (products: Product[]) => {
    const sorted = products.sort((a, b) => b.rating.count - a.rating.count)
    return sorted;
}

export const sortBySuggestion = (products: Product[]) => {
    const sorted = products.sort((a, b) => b.rating.rate - a.rating.rate)
    return sorted;
}