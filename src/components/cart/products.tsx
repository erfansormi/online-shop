import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { SelectedProduct } from '../../types/user/userTypes';

// funcs
import { handleColor } from '../product/detail/centerInfo/contentData';

// icons
import { TbArrowAutofitContent } from 'react-icons/tb';
import { BsShop } from 'react-icons/bs';

// components
import CartButtons from '../utils/buttons/cartButtons';

const CartProducts = ({ ...item }: SelectedProduct) => {
    return (
        <div
            className='flex flex-col sm:flex-row gap-7 py-6 px-6 border-b border-x-0 border-t-0 border-solid border-gray-200 last:border-b-0'
        >
            <div className='flex items-center flex-col'>

                {/* image */}
                <Link href={`/product/${item.product.slug}`}>
                    <div className='w-36 h-36 relative'>
                        <Image
                            src={item.product.image}
                            alt={item.product.title}
                            fill
                            className='object-contain'
                        />
                    </div>
                </Link>

                {/* cart actions buttons */}
                <div className='max-w-[150px]'>
                    <CartButtons
                        productId={item.product._id}
                        selectedVariant={{
                            selectedColor: item.variant.color,
                            variantId: item.variant._id
                        }}
                        sellerId={item.seller._id}
                    />
                </div>
            </div>

            {/* info */}
            <div className='flex flex-col gap-y-2 text-sm text-gray-700'>
                {/* title */}
                <div className='mb-2'>
                    <h5 className='text-gray-800 font-medium'>
                        {item.product.title}
                    </h5>
                </div>

                {/* size */}
                {
                    item.variant.size &&
                    <div className='flex items-center gap-x-2'>
                        <span className='flex'>
                            <TbArrowAutofitContent />
                        </span>
                        <span>
                            {item.variant.size}
                        </span>
                    </div>
                }

                {/* color */}
                <div className='flex items-center gap-x-2'>
                    <span className={`w-3 h-3 block rounded-full ${handleColor(item.variant.color)}`}></span>
                    <span>
                        {item.variant.color}
                    </span>
                </div>

                {/* seller */}
                <div className='flex items-center gap-x-2'>
                    <span className={`flex`}>
                        <BsShop />
                    </span>
                    <span>
                        {item.seller.shop_name}
                    </span>
                </div>

                {/* price section */}
                <div className='mt-3 flex flex-col gap-y-1'>

                    {/* discount */}
                    {
                        item.variant.old_price ?
                            <div className='text-red-500 font-medium'>
                                ${item.variant.old_price - item.variant.price} discount
                            </div> :
                            null
                    }

                    {/* price */}
                    <div className='text-gray-800 font-bold text-xl'>
                        ${item.variant.price}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProducts