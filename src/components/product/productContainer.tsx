import React from 'react'

// components
import Layout from '../layout/layout';
import ProductImage from './detail/productImage';
import ProductDetail from './detail/productDetail';

const ProductContainer = () => {
    return (
        <Layout max_w_3xl>
            <div className='grid-cols-16 grid gap-x-10'>

                {/* product image */}
                <div className='col-span-5 w-full'>
                    <ProductImage />
                </div>

                {/* center details */}
                <div className='col-span-6 w-full'>
                    <ProductDetail />
                </div>

                {/* add to cart */}
                <div className='col-span-5 w-full'>

                </div>
            </div>
        </Layout>
    )
}

export default ProductContainer