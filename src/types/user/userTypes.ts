import type { Product, Variant } from "../product/productTypes"

interface Address {
    unit: string
    plaque: string,
    building: string,
    postal_code: string,
    neighborhood: string,
    city: string,
    province: string,
    country: string,
    postal_address: string
}

type PickProductKeys = "slug" | "image" | "title"
export interface PurchasedProduct extends Pick<Product, PickProductKeys> {
    product: any,
    seller: string,
    price: number,
    discount_percentage?: number,
    count: number,
    size?: string,
    color: string
}

interface Order {
    receiver_delivery: string,
    address: string,
    products: PurchasedProduct[],
    total_price: number,
    total_discount?: number,
    payment_type: "in person" | "online",
    shipping_cost: number,
    order_date: Date,
    delivery_date: Date,
}

export interface SelectedVariant extends Omit<Variant, "colors"> {
    color: string,
}

interface SelectedProduct {
    product: string,
    variant: SelectedVariant & { quantity: number },
    seller: string
}

interface Cart {
    products: SelectedProduct[],
    products_counts: number,
    products_prices: number,
    total_prices_cart: number,
    total_profit: number,
    total_profit_percentage: number
}

export interface User {
    _id: string,
    email: string,
    first_name: string,
    last_name: string,
    password: string,
    addresses: Address[]
    photo?: string,
    reset_password_token?: string,
    reset_password_expire?: Date,
    orders: Order[],
    favorite_lists: any[],
    comments: Comment[],
    created_at: Date,
    cart: Cart
}