import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// types
import { Product } from '../../redux/data/dataSlice';

// icons
import { BsStarFill } from 'react-icons/bs';

// components
import Price from '../utils/price/price';
import DiscountPercentage from '../utils/price/discountPercentage';
import OldPrice from '../utils/price/oldPrice';

interface Props {
    products: Product[]
}

const ProductsCard = ({ products }: Props) => {
    return (
        <>
            {products.map((item, index) =>
                <div
                    key={index * 17}
                    className="border-solid border-x border-b-2 border-t-0 border-gray-100 hover:shadow-lg transition-shadow duration-300"
                >
                    <Link
                        href={`/product/${item.id}`}
                        className="flex flex-col px-3 py-6 md:py-10"
                    >

                        {/* image */}
                        <div className='h-48 w-full flex justify-center mb-10'>
                            <div className='w-3/5 sm:w-4/5 h-full relative'>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className='object-contain'
                                />
                            </div>
                        </div>

                        {/* title */}
                        <div className='h-10 mb-3.5'>
                            <h3 className='text-sm normal-case font-bold text-gray-700 h-full ellipsis-2'>
                                {item.title}
                            </h3>
                        </div>

                        {/* rating */}
                        <div className='flex items-center gap-2 mb-3.5'>
                            <span className='flex text-yellow-400'>
                                <BsStarFill />
                            </span>
                            <span className="text-sm">
                                {item.rating.rate}
                            </span>
                        </div>

                        {/* price section */}
                        <div className='flex items-center justify-between'>

                            {/* new price */}
                            <Price price={Number((item.price * (100 - (item.rating.count / 100))) / 100)} />

                            {/* discount percentage */}
                            <DiscountPercentage discount={item.rating.count / 100} />
                        </div>

                        {/* old price */}
                        {
                            <div className='mt-1.5'>
                                <OldPrice oldPrice={item.price} />
                            </div>
                        }
                    </Link>
                </div>
            )}
        </>
    )
}

export default ProductsCard