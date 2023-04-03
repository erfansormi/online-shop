import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

// mui
import { Skeleton } from '@mui/material';

// types
import { Product } from '../../../types/product/productTypes';

// components
import DiscountPercentage from '../price/discountPercentage';
import OldPrice from '../price/oldPrice';
import Price from '../price/price';

const SmallCard = ({ image, category, rating, title, sellers, slug }: Product) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <section className='w-full h-full flex flex-col justify-between h-64 overflow-hidden w-44'>
            <Link href={`/product/${slug}`} target={'_parent'} className="block h-full">

                {/* card image */}
                <div className='flex justify-center items-center bg-white h-3/5 overflow-hidden'>
                    <div className='w-28 h-28 md:h-32 md:w-32 relative'>
                        <Image
                            className={`rounded-lg object-contain ${imageLoaded ? "block" : "hidden"}`}
                            src={image}
                            alt={title}
                            fill={true}
                            quality={80}
                            onLoadingComplete={() => setImageLoaded(true)}
                            sizes="(max-width: 230px) 100vw,
                            (max-width: 500px) 40vw,
                            (max-width: 768px) 30vw,
                            (max-width: 1200px) 20vw,
                            15vw"
                        />
                        {
                            !imageLoaded ?
                                <Skeleton
                                    variant="rounded"
                                    width={"100%"}
                                    height={"100%"}
                                />
                                :
                                null
                        }
                    </div>
                </div>

                {/* card info */}
                <div className='flex flex-col px-4 py-2 bg-rose-50 h-2/5'>

                    {/* title */}
                    <div className='h-5 truncate w-full overflow-hidden mb-2 capitalize'>
                        <h5 className='text-gray-800 text-sm font-normal truncate w-36'>
                            {title}
                        </h5>
                    </div>
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
                </div>
            </Link>
        </section >
    )
}

export default SmallCard