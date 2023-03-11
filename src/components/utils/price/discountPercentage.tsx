import React from 'react'
import { Variant } from '../../../types/product/productTypes';

interface Props {
    variant?: Variant[],
    discount?: number
    size?: "medium" | "large",
    className?: string
}

const DiscountPercentage = ({ size, variant, discount, className }: Props) => {
    const discountPercentage = discount ? discount : variant && variant.find(item => item.available)?.discount_percentage;

    return (
        <>
            {
                discountPercentage ?
                    <span className={`bg-rose-500 text-white select-none rounded-xl py-0.5 ${size === "large" ? "px-1.5 text-sm" : className ? className : "px-1 text-xs"}`}>
                        {discountPercentage}%
                    </span>
                    : null
            }
        </>
    )
}

export default DiscountPercentage;