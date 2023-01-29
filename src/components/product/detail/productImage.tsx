import React from 'react';
import Image from 'next/image';

// redux
import { useSelector } from 'react-redux';
import { State } from '../../../redux/store';

const ProductImage = () => {
    const product = useSelector((state: State) => state.productDetail.product);

    return (
        <>
            {
                product ?
                    <div className='overflow-hidden py-8 border border-solid border-gray-200 rounded-lg select-none'>
                        <div className='h-full w-full flex justify-center'>
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={300}
                                height={450}
                                className="object-contain h-auto xl:w-[300px] md:w-[250px] w-[200px]"
                            />
                        </div>
                    </div>
                    : null
            }
        </>
    )
}

export default ProductImage