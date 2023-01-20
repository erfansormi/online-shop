import React from 'react'

interface Props {
    discount: number,
    size?: "medium" | "large"
}

const DiscountPercentage = ({ discount, size }: Props) => {
    return (
        <span className={`bg-rose-500 text-white rounded-xl py-0.5 ${size === "large" ? "px-1.5 text-sm" : "px-1 text-xs"}`}>
            {discount.toFixed(1)} %
        </span>
    )
}

export default DiscountPercentage