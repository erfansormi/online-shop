import React from 'react'
import Link from 'next/link'

// icons
import { BsArrowRightCircle } from 'react-icons/bs'

const SeeAllProducts = () => {
    return (
        <section className='w-full h-full bg-white h-64 overflow-hidden w-48'>
            <Link href={`/products`} className="block h-full">
                <div className='flex flex-col justify-center items-center capitalize h-full'>
                    <span className='flex text-3xl mb-3 text-rose-400'>
                        <BsArrowRightCircle />
                    </span>
                    <span className='text-gray-700 text-xl'>
                        see all
                    </span>
                </div>
            </Link>
        </section>
    )
}

export default SeeAllProducts;