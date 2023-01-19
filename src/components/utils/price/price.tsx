import React from 'react'

interface Props {
    price: number,
    size?: "medium" | "large"
}

const Price = ({ price, size }: Props) => {
    return (
        <span className={`font-bold text-gray-800 ${size === "large" ? "text-xl" : ""}`}>
            ${price.toFixed(2)}
        </span>
    )
}

export default Price