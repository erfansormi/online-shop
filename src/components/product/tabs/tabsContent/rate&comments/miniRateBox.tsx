import React, { useState } from 'react';

// mui
import { Button, Divider } from '@mui/material';

// context
import { useProductContext } from '../../../productContainer';

// components
import SeeRating from '../../../../data_display/seeRating';
import RegisterCommentModal from './newCommentModal';

const MiniRateBox = () => {
    const { productInfo: { product } } = useProductContext();

    // register new comment modal
    const [commentModal, setCommentModal] = useState(false);

    return (
        <div className='md:w-2/6 md:max-w-[260px] flex flex-col gap-y-5 min-w-[210px] h-fit sticky left-0 top-1/3'>

            {/* rate and count */}
            <div className='flex flex-col gap-y-3'>
                <div className="flex items-center gap-x-1">
                    <span className='font-bold text-2xl text-gray-800'>
                        {product.rating.rate}
                    </span>
                    <span className='text-xs text-gray-600'>
                        out of 5
                    </span>
                </div>
                <div>
                    <SeeRating size='small' rate={product.rating.rate} count={product.rating.count} />
                </div>
            </div>

            <Divider />

            {/* register new comment */}
            <div className='flex flex-col gap-y-2'>
                <span className='text-xs text-gray-500'>leave a comment about this product</span>
                <Button variant="outlined" onClick={() => setCommentModal(true)}>
                    register comment
                </Button>
            </div>

            {/* register new comment modal */}
            <RegisterCommentModal commentModal={commentModal} setCommentModal={setCommentModal} />

        </div>
    )
}

export default MiniRateBox;