import React, { useState, useEffect } from 'react'

// mui
import { Divider, Rating, Tooltip, Skeleton, Typography } from '@mui/material';

// context
import { useProductSelector } from '../../../pages/product/[product_id]';

// icons
import { BiCheck } from "react-icons/bi"

// colors
interface Color {
    color_class: string,
    name: string
}

// colors
const colors: Color[] = [
    {
        color_class: "bg-black",
        name: "black"
    },
    {
        color_class: "bg-white",
        name: "white"
    },
    {
        color_class: "bg-gray-500",
        name: "gray"
    },
    {
        color_class: "bg-red-500",
        name: "red"
    },
    {
        color_class: "bg-sky-300",
        name: "sky"
    },
    {
        color_class: "bg-green-500",
        name: "green"
    },
    {
        color_class: "bg-[gold]",
        name: "gold"
    },
    {
        color_class: "bg-slate-400",
        name: "slate"
    },
    {
        color_class: "bg-emerald-300",
        name: "emerald"
    },
    {
        color_class: "bg-blue-500",
        name: "blue"
    },
    {
        color_class: "bg-orange-400",
        name: "orange"
    },
    {
        color_class: "bg-neutral-300",
        name: "neutral"
    },
]
const whiteCheck = ["black", "gray", "red", "blue", "green"]

const ProductDetail = () => {
    const product = useProductSelector();

    const [loading, setLoading] = useState(true);

    // active color
    const [activeColor, setActiveColor] = useState("black")

    useEffect(() => {
        setLoading(false);
    }, [])

    return (
        <>
            {
                !product || loading ?
                    <div className='flex flex-col gap-y-5'>
                        <div>
                            <Skeleton variant='text' width="100%" height={40} />
                            <Skeleton variant='text' width="45%" height={40} />
                        </div>

                        <div>
                            <Skeleton variant="rounded" width={"100%"} height={190} />
                        </div>

                        <div>
                            <Skeleton variant='text' width="100%" height={25} />
                            <Skeleton variant='text' width="100%" height={25} />
                            <Skeleton variant='text' width="100%" height={25} />
                            <Skeleton variant='text' width="60%" height={25} />
                        </div>
                    </div> :
                    product &&
                    <div className='flex flex-col px-5'>
                        {/* title */}
                        <div>
                            <div className='mb-2 capitalize text-cyan-500 font-bold'>
                                <span>
                                    {product.category}
                                </span>
                            </div>
                            <h1 className='text-2xl text-gray-800'>
                                {product.title}
                            </h1>
                        </div>

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
                            <div className='flex gap-5 flex-wrap'>
                                {colors.map((item, index) =>
                                    <Tooltip
                                        title={item.name.split("")[0].toUpperCase() + item.name.slice(1)}
                                        key={index * 37}
                                    >
                                        <span
                                            className={`${item.color_class} ${activeColor === item.name ? "ring-offset-1 ring-4 ring-cyan-500" : "ring-offset-[4px] ring-1 ring-gray-300"} cursor-pointer rounded-full w-9 h-9 flex items-center justify-center`}
                                            onClick={() => setActiveColor(item.name)}
                                        >
                                            {activeColor === item.name ?
                                                <BiCheck className={`${whiteCheck.includes(item.name) ? "text-white" : "text-black"} text-2xl`} />
                                                : null
                                            }
                                        </span>
                                    </Tooltip>
                                )}
                            </div>

                            {/* description */}
                            <div className='text-gray-500'>
                                <p>
                                    {product.description}
                                </p>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default ProductDetail;