import { Button, Divider } from '@mui/material';
import React, { LegacyRef } from 'react'

// context
import { useProductContext } from '../../../pages/product/[product_id]';

// components
import SeeRating from '../../data_display/rating';
import TabsTitle from './tabsTitle';

// ts
interface Props {
    commentsRef: LegacyRef<HTMLDivElement> | undefined;
}

const ProductComments = ({ commentsRef }: Props) => {
    // context
    const { productInfo } = useProductContext();
    const { product } = productInfo;

    return (
        <div ref={commentsRef}>
            {/* title */}
            <TabsTitle title='comments and rating' />

            <div className='flex gap-x-10'>

                {/* rating and register a comment */}
                <div className='w-2/6 max-w-[260px] flex flex-col gap-y-3 min-w-[210px]'>

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

                    {/* register a comment */}
                    <div className='flex flex-col gap-y-2'>
                        <span className='text-xs text-gray-500'>leave a comment about this product</span>
                        <Button variant="outlined">
                            register comment
                        </Button>
                    </div>
                </div>

                {/* comments */}
                <div className="w-full text-gray-700">
                    {product.comments.length ?
                        <div>

                        </div> :
                        <div className='capitalize'>
                            <h6 className='mb-4 text-lg mt-1.5'>
                                You can also comment on this product
                            </h6>
                            <p className='text-sm text-gray-500'>
                                no comment is recorded!
                            </p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductComments;