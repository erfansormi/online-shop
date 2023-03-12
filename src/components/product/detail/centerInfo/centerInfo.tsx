import React, { useState } from 'react'

// mui
import { Divider, Rating } from '@mui/material';

// context
import { useProductContext } from '../../../../pages/product/[product_id]';

// components
import ProductColors from './productColors';
import ProductSizes from './productSizes';
import Attributes from './attributes';

const CenterInfo = () => {
    // context
    const { productInfo } = useProductContext();
    const { product } = productInfo;

    return (
        <>
            <div className='flex flex-col px-5'>
                <div className='my-4'>
                    <Divider />
                </div>

                <div className='flex flex-col gap-y-6'>

                    {/* rating */}
                    <div className='flex flex-col'>
                        <div className='flex items-center gap-x-2'>
                            <Rating name="read-only" value={product.rating.rate} readOnly precision={0.1} />
                            <span className='text-gray-500'>
                                ({product.rating.count})
                            </span>
                        </div>
                    </div>

                    {/* select size */}
                    <ProductSizes />

                    {/* colors */}
                    <ProductColors />

                    {/* attributes */}
                    <Attributes />
                </div>
            </div>
        </>
    )
}

export default CenterInfo;