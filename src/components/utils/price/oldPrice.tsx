import React from 'react'
import { Variant } from '../../../types/product/productTypes';

interface Props {
    variant?: Variant[],
    oldPrice?: number,
    size?: "medium" | "large"
    className?: string
}

const OldPrice = ({ variant, size, oldPrice, className }: Props) => {
    const handleOldPrice = oldPrice ? oldPrice : variant && variant.find(item => item.available)?.old_price;

    return (
        <>
            {
                handleOldPrice ?
                    <span className={`text-gray-400 font-normal line-through ${size === "large" ? "leading-5 text-[1.1rem]" : className ? className : "text-sm"}`}>
                        ${handleOldPrice}
                    </span> :
                    null
            }
        </>
    )
}

export default OldPrice;