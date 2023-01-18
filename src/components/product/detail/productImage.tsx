import React from 'react';
import Image from 'next/image';

// context
import { useProductDetail } from '../../../pages/product/[product_id]'

const ProductImage = () => {
    const product = useProductDetail();

    return (
        <div className='overflow-hidden py-6 border-2 border-solid border-gray-300 rounded-lg'>
            <div className='h-full w-full flex justify-center'>
                <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={450}
                    className="object-contain h-auto"
                />
            </div>
        </div>
    )
}

export default ProductImage