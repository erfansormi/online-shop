import React from 'react'

// components
import Layout from '../layout/layout';
import ProductImage from './detail/productImage';
import ProductDetail from './detail/productDetail';
import SellerBox from './detail/sellerBox';

// context
import { useProductContext } from '../../pages/product/[product_id]';

const ProductContainer = () => {
    // context
    const { productInfo } = useProductContext();
    const { product } = productInfo;

    return (
        <Layout max_w_3xl>
            <div className='flex justify-between gap-x-8 lg:mt-14 md:mt-8 sm:mt-6 mt-2'>

                {/* product image */}
                <div className='w-full'>
                    <ProductImage />
                </div>

                {/* other details */}
                <div className="flex flex-col">

                    {/* title */}
                    <div className="mb-2 relative">
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
                            <ProductDetail />
                        </div>

                        {/* seller box */}
                        <div className='w-2/6 min-w-[290px] mt-1'>
                            <SellerBox />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProductContainer