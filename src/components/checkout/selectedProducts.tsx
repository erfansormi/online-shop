import React from 'react';
import Image from "next/image";

// context
import { useUserContext } from '../../context/userContext'

// icons
import { TbArrowAutofitContent } from 'react-icons/tb';
import { handleColor } from '../product/detail/centerInfo/contentData';

const SelectedProducts = () => {
    const { user } = useUserContext();

    return (
        <div className='text-gray-700'>

            {/* products */}
            <div className='flex flex-wrap gap-8'>
                {user?.cart.products.map((item, index) =>
                    <div
                        key={index * 98}
                        className='flex flex-col gap-y-3'
                    >
                        {/* image */}
                        <div className='relative w-20 h-20'>
                            <Image
                                fill
                                alt={item.product.title}
                                src={item.product.image}
                                className='object-contain'
                            />
                            <span className='absolute bottom-0 -right-3 bg-gray-200 rounded-lg flex items-center justify-center h-5 w-5 text-sm'>
                                {item.variant.quantity}
                            </span>
                        </div>

                        {/* size and color */}
                        <div className='flex items-center justify-center gap-x-3 text-sm'>

                            {/* size */}
                            {
                                item.variant.size ?
                                    <div className='flex items-center gap-x-1'>
                                        <span className='flex text-lg'>
                                            <TbArrowAutofitContent />
                                        </span>
                                        <span>
                                            {item.variant.size}
                                        </span>
                                    </div> :
                                    null
                            }

                            <div className='flex items-center gap-x-1'>
                                <span className={`${handleColor(item.variant.color)} w-3 h-3 rounded-full`}>
                                </span>
                                <span>
                                    {item.variant.color}
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SelectedProducts;