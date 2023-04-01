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
                    <span className={`flex items-center justify-center bg-rose-500 text-white select-none rounded-xl py-0.5 leading-[0px] ${size === "large" ? "px-1.5 text-sm h-6" : className ? className : "px-1.5 text-[0.7rem] h-5"}`}>
                        {discountPercentage}%
                    </span>
                    : null
            }
        </>
    )
}

export default DiscountPercentage;