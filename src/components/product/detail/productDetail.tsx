import React, { useState, useEffect } from 'react'

// mui
import { Divider, Rating, Tooltip, Skeleton, Typography } from '@mui/material';

// context
import { useProductContext } from '../../../pages/product/[product_id]';

// icons
import { BiCheck } from "react-icons/bi"

// colors
import { colors, whiteCheck } from './detailData';

const ProductDetail = () => {
    // context
    const { productInfo, setProductInfo } = useProductContext();
    const { product, selectedSeller, selectedVariant } = productInfo;

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
        <>
            <div className='flex flex-col px-5'>
                <div className='my-4'>
                    <Divider />
                </div>

                <div className='flex flex-col gap-y-7'>

                    {/* rating */}
                    <div className='flex flex-col'>
                        <div className='flex items-center gap-x-2'>
                            <Rating name="read-only" value={product.rating.rate} readOnly precision={0.1} />
                            <span className='text-gray-500'>
                                ({product.rating.count})
                            </span>
                        </div>
                    </div>

                    {/* colors */}
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex item-center gap-x-1 capitalize text-gray-900'>
                            <span>color:</span>
                            <span>{activeColor}</span>
                        </div>
                        <div className='flex gap-5 flex-wrap'>
                            {productInfo.selectedVariant.colors.map((item, index) =>
                                <Tooltip
                                    title={item}
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

                    {/* attributes */}
                    <div className='capitalize flex flex-col gap-y-5 mt-2'>
                        <h5 className='text-gray-800'>
                            Attributes
                        </h5>

                        <ul className='flex flex-col px-2 list-inside list-disc marker:text-gray-500'>
                            {productInfo.product.attributes.map((item, index) =>
                                <li className='flex gap-x-2 mb-3.5 last:mb-0' key={index * 39}>

                                    {/* attribute name */}
                                    <span className='text-gray-500 list-item'>
                                        {item.name} :
                                    </span>

                                    {/* attribute value */}
                                    <span className='font-bold text-gray-700'>
                                        {item.value}
                                    </span>
                                </li>
                            )}
                        </ul>
                    </div>

                    <Divider />

                    {/* description */}
                    <div>
                        <h5 className='text-gray-800 mb-5'>
                            Description
                        </h5>
                        <div className='text-gray-500 bg-white'>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail;