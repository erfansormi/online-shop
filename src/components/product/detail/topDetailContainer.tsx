import React from 'react'

// context
import { useProductContext } from '../productContainer';

// components
import { Divider } from '@mui/material';
import ProductImage from './imageSection/productImage';
import CenterInfo from './centerInfo/centerInfo';
import SellerBox from './sellerSection/sellerBox';

const TopDetailContainer = () => {
    const { productInfo: { product } } = useProductContext();

    return (
        <div className='flex flex-col gap-y-8'>
            <div className='flex flex-col lg:flex-row justify-between gap-x-8 gap-y-12 lg:mt-14 md:mt-12 sm:mt-6 mt-2'>

                {/* product image */}
                <div className='lg:w-2/6'>
                    <ProductImage />
                </div>

                {/* other details */}
                <div className="flex flex-col lg:w-4/6">

                    {/* title */}
                    <div className="mb-1 relative">
                        <div className='absolute -top-7 mb-2 capitalize text-cyan-500 font-bold'>
                            <span>
                                {product.category}
                            </span>
                        </div>
                        <h1 className='text-2xl text-gray-800'>
                            {product.title}
                        </h1>
                    </div>

                    <div className='flex flex-col md:flex-row gap-x-4 gap-y-8'>

                        {/* center details */}
                        <div className='md:w-4/6'>
                            <CenterInfo />
                        </div>

                        <Divider className='md:hidden' />

                        {/* seller box */}
                        <div className='md:w-2/6 md:min-w-[290px] mt-1'>
                            <SellerBox />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopDetailContainer;