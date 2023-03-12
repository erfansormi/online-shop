import React, { useState } from 'react'

// context
import { useProductContext } from '../../../../pages/product/[product_id]';

// icons
import { BiCheck } from "react-icons/bi"

// colors data
import { colors, whiteCheck } from './contentData';

// mui
import { Tooltip } from '@mui/material';

const ProductColors = () => {

    // context
    const { productInfo } = useProductContext();
    const { selectedVariant } = productInfo;

    // active color
    const [activeColor, setActiveColor] = useState(selectedVariant.colors[0]);

    // handle product color
    const handleColor = (colorName: string) => {
        const matchedColor = colors.find(item => item.name === colorName);

        if (matchedColor) {
            return matchedColor.color_class
        }
        else {
            return `bg-${colorName}-500`
        }
    }

    return (
        <div className='flex flex-col gap-y-5'>
            <div className='flex item-center gap-x-1 capitalize text-gray-800 font-bold'>
                <span>color:</span>
                <span>{activeColor}</span>
            </div>
            <div className='flex gap-5 flex-wrap'>
                {productInfo.selectedVariant.colors.map((item, index) =>
                    <Tooltip
                        title={item.split("")[0].toUpperCase() + item.slice(1)}
                        key={index * 37}
                    >
                        <span
                            className={`${handleColor(item)} ${activeColor === item ? "ring-offset-1 ring-4 ring-cyan-500" : "ring-offset-[4px] ring-1 ring-gray-300"} cursor-pointer rounded-full w-9 h-9 flex items-center justify-center`}
                            onClick={() => setActiveColor(item)}
                        >
                            {
                                activeColor === item ?
                                    <BiCheck className={`${whiteCheck.includes(item) ? "text-white" : "text-black"} text-2xl`} />
                                    : null
                            }
                        </span>
                    </Tooltip>
                )}
            </div>
        </div>
    )
}

export default ProductColors;