import React from 'react';
import Image from 'next/image';

// contexts
import { useProductContext } from '../../productContainer';

// components
import TopLeftButtons from './topLeftButtons';

const ProductImage = () => {
    const { productInfo } = useProductContext();
    const { product } = productInfo;

    return (
        <div className='flex lg:flex-row flex-col w-full gap-x-3 gap-y-1'>

            {/* left buttons */}
            <TopLeftButtons />

            {/* image */}
            <div className='overflow-hidden py-8 border border-solid border-gray-200 rounded-lg select-none w-full'>
                <div className='h-full w-full flex justify-center'>
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={300}
                        height={450}
                        className="object-contain h-auto xl:w-[300px] md:w-[250px] w-[200px]"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductImage