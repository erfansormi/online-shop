import { Skeleton } from '@mui/material';
import React from 'react'

const CheckoutSkeleton = () => {
    return (
        <div className='flex flex-col gap-3'>
            <header className='py-12 rounded-lg border border-solid border-gray-200 flex justify-center'>
                <div className='flex flex-col items-center gap-y-6 w-full'>
                    <Skeleton className='w-1/6 h-8' />
                    <Skeleton className='w-1/2 h-12' />
                </div>
            </header>
            <div className='flex gap-3'>

                <aside className='w-1/4 p-5 rounded-lg border border-solid border-gray-200 flex flex-col h-fit'>
                    <div className='py-4 border-b-gray-200'>
                        <Skeleton className='w-3/4' />
                    </div>
                    <div className='py-4 border-b-gray-200'>
                        <Skeleton className='w-3/4' />
                    </div>
                    <div className='py-4'>
                        <Skeleton className='w-3/4' />
                    </div>
                    <div className='mt-2'>
                        <Skeleton className='w-full h-14 scale-100' />
                    </div>
                </aside>

                <section className='w-3/4 flex flex-col gap-3'>
                    <div className='rounded-lg border border-solid border-gray-200 px-5 py-12 flex flex-col gap-y-3'>
                        <Skeleton className='w-24' />
                        <Skeleton className='w-3/5' />
                        <Skeleton className='w-16' />
                    </div>
                    <div className='rounded-lg border border-solid border-gray-200 px-5 py-12 flex flex-col gap-y-3'>
                        <Skeleton className='w-24' />
                        <Skeleton className='w-3/5' />
                        <Skeleton className='w-16' />
                    </div>
                    <div className='rounded-lg border border-solid border-gray-200 px-5 py-12 flex flex-col gap-y-3'>
                        <Skeleton className='w-24' />
                        <Skeleton className='w-3/5' />
                        <Skeleton className='w-16' />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CheckoutSkeleton;