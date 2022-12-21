import { hostName } from '../../../firebase/app';

export const fetchSlidersData = async () => {
    const res = await fetch(`${hostName}/sliders.json/`)
    const slidersError = res.ok ? "" : res.statusText;
    const sliders = await res.json();

    return {
        slidersError,
        sliders
    }
}

export const fetchProductsData = async () => {
    const res = await fetch(`${hostName}/products.json/`)
    const productsError = res.ok ? "" : res.statusText;
    const products = await res.json();

    return {
        products,
        productsError
    }
}