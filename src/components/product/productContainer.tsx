import React from 'react'

// context
import { useProductContext } from '../../pages/product/[product_id]';

// components
import Layout from '../layout/layout';
import ProductImage from './detail/leftSection/productImage';
import CenterInfo from './detail/centerInfo/centerInfo';
import SellerBox from './detail/sellerSection/sellerBox';
import RelatedProducts from './detail/relatedProducts';
import { Divider } from '@mui/material';

const ProductContainer = () => {
    // context
    const { productInfo } = useProductContext();
    const { product } = productInfo;

    return (
        <Layout max_w_3xl>
            <div className='flex flex-col gap-y-8'>

                {/* product info */}
                <div className='flex justify-between gap-x-8 lg:mt-14 md:mt-8 sm:mt-6 mt-2'>

                    {/* product image */}
                    <div className='w-2/6'>
                        <ProductImage />
                    </div>

                    {/* other details */}
                    <div className="flex flex-col w-4/6">

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

                        <div className='flex'>

                            {/* center details */}
                            <div className='w-4/6'>
                                <CenterInfo />
                            </div>

                            {/* seller box */}
                            <div className='w-2/6 min-w-[290px] mt-1'>
                                <SellerBox />
                            </div>
                        </div>
                    </div>
                </div>

                <Divider />

                {/* related products */}
                <RelatedProducts />

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
        </Layout>
    )
}

export default ProductContainer;