import React from 'react'

interface Props {
    oldPrice: number,
    size?: "medium" | "large"
}

const OldPrice = ({ oldPrice, size }: Props) => {
    return (
        <span className={`text-gray-400 line-through ${size === "large" ? "leading-5 text-[1.1rem]" : "text-sm"}`}>
            ${oldPrice}
        </span>
    )
}

export default OldPrice;