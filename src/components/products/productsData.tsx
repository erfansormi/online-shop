import { Product } from "../../types/product/productTypes";

export type SortBy = | "most relevant" | "cheapest" | "expensivest" | "best seller" | "Buyers' suggestion";

interface SortData {
    title: SortBy;
}

export const sortByData: SortData[] = [
    {
        title: "most relevant",
    },
    {
        title: "cheapest",
    },
    {
        title: "expensivest",
    },
    {
        title: "best seller",
    },
    {
        title: "Buyers' suggestion",
    },
];

// sort functions
export const sortByRelevant = (products: Product[]) => {
    const sorted = products.sort((a, b) => {
        const categoryA = a.category;
        const categoryB = b.category;

        if (categoryA < categoryB) {
            return -1;
        }

        if (categoryA > categoryB) {
            return 1;
        }

        return 0;
    });
    return sorted;
};

export const sortByCheapest = (products: Product[]) => {
    const sorted = products.sort(
        (a, b) => a.sellers[0].variants[0].price - b.sellers[0].variants[0].price
    );
    return sorted;
};

export const sortByExpensivest = (products: Product[]) => {
    const sorted = products.sort(
        (a, b) => b.sellers[0].variants[0].price - a.sellers[0].variants[0].price
    );
    return sorted;
};

export const sortByBestSeller = (products: Product[]) => {
    const sorted = products.sort((a, b) => b.rating.count - a.rating.count);
    return sorted;
};

export const sortBySuggestion = (products: Product[]) => {
    const sorted = products.sort((a, b) => b.rating.rate - a.rating.rate);
    return sorted;
};
