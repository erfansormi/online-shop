import type { Product, Variant } from "../product/productTypes";

// types
export interface Seller {
    _id: string,
    shop_name: string,
    slug: string,
    email: string,
    performance: "great" | "very good" | "good" | "medium" | "weak" | "very weak",
    satisfaction_percentage: number,
    phone: string,
    products: Product[],
    about: string,
    created_at: Date,
}

export interface SelectedVariant extends Omit<Variant, "colors"> {
    color: string,
}

export interface SelectedProduct {
    product: Product,
    variant: SelectedVariant & { quantity: number },
    seller: Seller
}

interface Cart {
    products: SelectedProduct[],
    products_counts: number,
    products_prices: number,
    total_prices_cart: number,
    total_profit: number,
    total_profit_percentage: number
}

interface Activities {
    recent_visits: Product[],
}

export interface Addresses {
    postal_address: string
    province: string,
    city: string,
    plaque: string,
    unit: string
    postal_code: string,
    coordinates: [number, number],
    _id: any
}

export interface Order {
    address: string,
    products: SelectedProduct[],
    payment_type: "in person" | "online",
    order_date: Date,
    delivery_date: Date,
    shipping_cost: number,
    products_counts: number,
    products_prices: number,
    total_prices_cart: number,
    total_profit: number,
    total_profit_percentage: number,
}

export interface User {
    _id: string,
    email: string,
    first_name: string,
    last_name: string,
    password: string,
    photo?: string,
    birth_date: Date,
    reset_password_token?: string,
    reset_password_expire?: Date,
    orders: Order[],
    comments: Comment[],
    created_at: Date,
    cart: Cart
    favorites_list: Product[],
    activities: Activities,
    addresses: Addresses[]
}