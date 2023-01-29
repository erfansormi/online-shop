import { Product } from "../../../redux/data/dataSlice";

export const getProductCount = (products: Product[], product: Product) => {
    const productInCart = products.find(item => item.id === product.id);
    if (productInCart) {
        return productInCart.quantity;
    } else {
        return 0;
    }
}

export const priceCalculator = (products: Product[], product: Product) => {
    const productInCart = products.find(item => item.id === product.id);
    if (productInCart) {
        const newPrice = product.price * productInCart.quantity;
        return +newPrice.toFixed(2)
    }
    else {
        return product.price
    }
}

export const totalPriceCalculator = (products: Product[]) => {
    const totalPrice = products.reduce((total, item) => item.price, 0)
    return totalPrice;
}