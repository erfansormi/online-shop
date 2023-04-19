import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// types
import { Product } from '../../../types/product/productTypes';

// icons
import { BsStarFill } from 'react-icons/bs';

// components
import Price from '../../utils/price/price';
import DiscountPercentage from '../../utils/price/discountPercentage';
import OldPrice from '../../utils/price/oldPrice';

interface Props {
    products: Product[]
}

const ProductsCard = ({ products }: Props) => {
    return (
        <>
            {products.map(({ image, category, title, slug, sellers, rating }, index) =>
                <div
                    key={index * 17}
                    className="border-solid border-x border-b-2 border-t-0 border-gray-100 hover:shadow-lg transition-shadow duration-300"
                >
                    <Link
                        href={`/product/${slug}`}
                        className="flex flex-col px-3 py-6 md:py-10"
                    >

                        {/* image */}
                        <div className='h-48 w-full flex justify-center mb-10'>
                            <div className='min-[350px]:w-4/5 w-3/5 h-full relative'>
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className='object-contain'
                                    sizes='(max-width:350px) 70vw,
                                    (max-width:500px) 45vw,
                                    (max-width:1023px) 38vw,
                                    (max-width:1279px) 25vw,
                                    17vw'
                                />
                            </div>
                        </div>

                        {/* title */}
                        <div className='h-10 mb-3.5'>
                            <h3 className='text-sm normal-case font-medium text-gray-700 h-full ellipsis-2'>
                                {title}
                            </h3>
                        </div>

                        {/* rating */}
                        <div className='flex items-center gap-2 mb-3.5'>
                            <span className='flex text-yellow-400'>
                                <BsStarFill />
                            </span>
                            <span className="text-sm">
                                {rating.rate}
                            </span>
                        </div>

                        {/* price section */}
                        {
                            //  check if product discount there is 
                            sellers[0].variants[0].old_price && sellers[0].variants[0].discount_percentage ?
                                <>
                                    {/* new price */}
                                    <div className='flex items-center justify-between'>
                                        <Price variant={sellers[0].variants} />

                                        {/* discount percentage */}
                                        <DiscountPercentage variant={sellers[0].variants} />
                                    </div>

                                    {/* old price */}
                                    <div className='mt-1.5'>
                                        <OldPrice variant={sellers[0].variants} />
                                    </div>
                                </> :

                                // product has no discount
                                <Price variant={sellers[0].variants} />
                        }
                    </Link>
                </div>
            )}
        </>
    )
}

export default ProductsCard