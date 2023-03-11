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

export interface Product {
    rating: Rating;
    _id: string;
    title: string;
    category: string;
    description: string;
    image: string;
    sellers: Seller[];
    attributes: Attribute[];
    comments: any[];
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
    comments: any[];
    slug: string;
    __v: number;
    created_at: Date;
}

export interface Slider {
    image: string
}