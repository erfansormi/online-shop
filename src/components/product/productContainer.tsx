import React from 'react'

// components
import Layout from '../layout/layout';
import ProductImage from './detail/productImage';
import ProductDetail from './detail/productDetail';
import PriceBox from './detail/priceBox';

const ProductContainer = () => {
    return (
        <Layout max_w_3xl className='md:mt-8 sm:mt-6 mt-2'>
            <div className='grid-cols-16 grid md:gap-8 gap-y-8 sm:gap-x-2'>

                {/* product image */}
                <div className='lg:col-span-5 md:col-span-8 col-span-16 w-full'>
                    <ProductImage />
                </div>

                {/* center details */}
                <div className='lg:col-span-6 md:col-span-8 col-span-16 w-full'>
                    <ProductDetail />
                </div>

                {/* add to cart */}
                <div className='lg:col-span-5 col-span-16 w-full'>
                    <PriceBox />
                </div>
            </div>
        </Layout>
    )
}

export default ProductContainer