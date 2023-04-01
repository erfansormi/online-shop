import { Skeleton } from '@mui/material'
import React from 'react'

const ProductSkeleton = () => {
    return (
        <div className="flex flex-col gap-y-4 p-8">
            {/* image */}
            <div className='flex justify-center'>
                <Skeleton className='scale-100' width={128} height={100} />
            </div>

            {/* title */}
            <div>
                <Skeleton className='w-full' />
                <Skeleton className='w-2/3' />
            </div>

            {/* price */}
            <div>
                <Skeleton className='w-5' />
            </div>
        </div>
    )
}

export default ProductSkeleton