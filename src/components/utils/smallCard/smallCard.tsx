import React from 'react'
import Link from 'next/link';

// types
import { Product } from '../../../redux/data/dataSlice';

const SmallCard = ({ image, price, title, id }: Pick<Product, "title" | "image" | "price" | "id">) => {
    return (
        <section className='w-full h-full flex flex-col justify-between h-60 overflow-hidden'>
            <Link href={`products/product${id}`} className="block h-full">
                <div className='flex justify-center items-center bg-orange-100 h-3/4 overflow-hidden'>
                    <div className='w-28 h-28 md:h-32 md:w-32'>
                        <img
                            className='w-full h-full object-contain rounded-lg'
                            src={image}
                            alt={title}
                        />
                    </div>
                </div>
                <div className='flex justify-between items-center px-4 py-2 bg-orange-400 h-1/4'>
                    <div className='h-5 truncate w-4/5 overflow-hidden mr-2 capitalize'>
                        <span>
                            {title}
                        </span>
                    </div>
                    <div>
                        <span>
                            ${price}
                        </span>
                    </div>
                </div>
            </Link>
        </section>
    )
}

export default SmallCard