import { PurchasedProduct } from "../user/userTypes";

export interface Rating {
    rate: number;
    count: number;
}

export interface Variant {
    available: boolean;
    price: number;
    old_price?: number;
    discount_percentage?: number;
    colors: string[];
    size?: string;
    _id: string;
}

export interface Seller {
    seller: string;
    variants: Variant[];
    _id: string;
}

interface SellerDetail {
    _id: string,
    shop_name: string,
    email: string,
    performance: "great" | "very good" | "good" | "medium" | "weak" | "very weak",
    satisfaction_percentage: string,
    about: string,
    created_at: Date,
    slug: string
}

export interface SellerWithDetail {
    seller: SellerDetail;
    variants: Variant[];
    _id: string;
}

export interface Attribute {
    name: string;
    value: string;
    _id: string;
}

export interface Comment {
    title?: string,
    rate: number,
    comment_text: string,
    is_suggest?: "no" | "yes" | "unsure",
    user: {
        unknown: boolean,
        userId: {
            _id: string,
            first_name: string,
            last_name: string
        }
    },
    is_buyer: boolean,
    purchased_product?: Pick<PurchasedProduct, "color" | "seller" | "slug">,
    created_at: Date
}

export interface Product {
    rating: Rating;
    _id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    sellers: Seller[];
    attributes: Attribute[];
    slug: string;
    __v: number;
    created_at: Date;
}

export interface ProductDetail {
    rating: Rating;
    _id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    sellers: SellerWithDetail[];
    attributes: Attribute[];
    slug: string;
    __v: number;
    created_at: Date;
}

export interface Slider {
    image: string
}