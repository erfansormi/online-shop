import React from 'react'

// mui
import { Divider } from '@mui/material';

// context
import { useProductContext } from '../../productContainer';

// components
import ProductColors from './productColors';
import ProductSizes from './productSizes';
import Attributes from './attributes';
import SeeRating from '../../../../data_display/seeRating';

const CenterInfo = () => {
    // context
    const { productInfo } = useProductContext();
    const { product } = productInfo;

    return (
        <>
            <div className='flex flex-col'>
                <div className='my-4'>
                    <Divider />
                </div>

                <div className='flex flex-col gap-y-6'>

                    {/* rating */}
                    <SeeRating count={product.rating.count} rate={product.rating.rate} />

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