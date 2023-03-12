import React from 'react';
import { Rating, RatingProps } from '@mui/material';

interface Props extends RatingProps {
    rate: number,
    count: number
}

const SeeRating = ({ rate, count, ...props }: Props) => {
    return (
        <div className='flex flex-col'>
            <div className='flex items-center gap-x-2'>
                <Rating name="read-only" {...props} value={rate} readOnly precision={0.1} />
                <span className='text-gray-500 text-sm leading-3'>
                    ({count})
                </span>
            </div>
        </div>
    )
}

export default SeeRating;