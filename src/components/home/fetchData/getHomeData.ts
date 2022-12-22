import { hostName } from '../../../firebase/app';

export const fetchData = async () => {

    // sliders
    const slidersRes = await fetch(`${hostName}/sliders.json/`)
    const sliders = await slidersRes.json();

    // all products
    const res = await fetch(`${hostName}/products.json/`)
    const productsError = res.ok ? "" : res.statusText;
    const products = await res.json();

    // new products
    const newProductsRes = await fetch(`${hostName}/newProducts.json/`)
    const newProducts = await newProductsRes.json();

    // special offer
    const specialOffersRes = await fetch(`${hostName}/offerProducts.json/`)
    const specialOffers = await specialOffersRes.json();

    return {
        products,
        productsError,
        newProducts,
        sliders,
        specialOffers
    }
}