import React from 'react'
import { Variant } from '../../../types/product/productTypes'

interface Props {
    variant?: Variant[],
    size?: "large" | "medium",
    className?: string
    price?: number
}

const Price = ({ variant, size, price, className }: Props) => {
    const handlePrice = price ? price : variant && variant.find(item => item.available)?.price;

    return (
        <>
            {
                handlePrice ?
                    <span className={`font-medium text-gray-800 ${size === "large" ? "text-xl" : className ? className : "text-base"}`}>
                        ${handlePrice}
                    </span> :
                    null
            }
        </>
    )
}

export default Price