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

export interface Slider {
    image: string
}