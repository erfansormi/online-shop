import React from 'react'

// components
import { Skeleton } from '@mui/material'
import TabContentTitle from '../data_display/tabContentTitle'

const CartSkeletonPage = () => {
    return (
        <div className='flex flex-col'>

            {/* title */}
            <div className='mb-10'>
                <TabContentTitle title='cart' />
            </div>

            <div className='flex flex-col md:flex-row gap-4'>

                {/* products section */}
                <div className='lg:w-[75%] md:w-[65%] w-full py-4 border-gray-200 border-solid border rounded-lg flex flex-col gap-y-6'>

                    {/* title */}
                    <div className='flex flex-col px-6 pt-2'>
                        <div className='flex flex-col'>
                            <h5 className='text-gray-800'>
                                your cart
                            </h5>
                        </div>
                    </div>

                    {/* products */}
                    <div>
                        {
                            [...Array(6)].map((item, index) =>
                                <div
                                    key={index * 88}
                                    className="flex gap-x-7 py-6 px-6 border-b border-x-0 border-t-0 border-solid border-gray-200 last:border-b-0"
                                >
                                    <div>
                                        <Skeleton className='w-24 h-24 scale-100' />
                                    </div>
                                    <div className='flex flex-col gap-y-4 w-full'>
                                        <Skeleton className='w-full' />
                                        <Skeleton className='w-2/5' />
                                        <Skeleton className='w-10' />
                                        <Skeleton className='w-10' />
                                        <Skeleton className='w-10' />
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>

                {/* checkout box */}
                <div className='lg:w-[25%] md:w-[35%] w-full text-gray-800 font-medium md:sticky top-24 capitalize px-6 py-8 h-fit border-gray-200 border-solid border rounded-lg flex flex-col gap-y-6'>
                    <div className='flex justify-between items-center'>
                        <Skeleton className="w-3/5" />
                        <Skeleton className="w-1/5" />
                    </div>
                    <div className='flex justify-between items-center'>
                        <Skeleton className="w-3/5" />
                        <Skeleton className="w-1/5" />
                    </div>
                    <div className='flex justify-between items-center'>
                        <Skeleton className="w-3/5" />
                        <Skeleton className="w-1/5" />
                    </div>
                    <div>
                        <Skeleton className="w-full h-14 scale-100" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartSkeletonPage;