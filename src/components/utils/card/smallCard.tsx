import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

// mui
import { Skeleton } from '@mui/material';

// types
import { Product } from '../../../redux/data/dataSlice';

const SmallCard = ({ image, category, description, id, price, rating, title }: Product) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <section className='w-full h-full flex flex-col justify-between h-64 overflow-hidden w-44'>
            <Link href={`product/${id}`} className="block h-full">

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
                            loading={"lazy"}
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
                    <div className='h-5 truncate w-full overflow-hidden mb-2 capitalize'>
                        <span className='text-gray-900 text-sm'>
                            {title}
                        </span>
                    </div>
                    <div className='flex items-center justify-between'>

                        {/* new price */}
                        <span className='font-bold text-gray-800'>
                            ${Number((price * (100 - (rating.count / 100))) / 100).toFixed(2)}
                        </span>

                        {/* discount percentage */}
                        {
                            <span className='bg-rose-500 text-white rounded-xl px-1 py-0.5 text-xs'>
                                {rating.count / 100} %
                            </span>
                        }
                    </div>

                    {/* old price */}
                    {
                        <div className='mt-1'>
                            <span className='text-gray-400 line-through text-sm'>
                                ${price}
                            </span>
                        </div>
                    }
                </div>
            </Link>
        </section>
    )
}

export default SmallCard