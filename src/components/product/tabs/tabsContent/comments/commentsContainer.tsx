import React from 'react';
import { Divider } from '@mui/material';

// context
import { useProductContext } from '../../../productContainer';

// components
import TabsTitle from '../tabsTitle';
import MiniRateBox from './miniRateBox';
import Comments from './comments';

const CommentsContainer = () => {
    // context
    const { productInfo } = useProductContext();
    const { product } = productInfo;

    return (
        <div>
            {/* title */}
            <TabsTitle title='comments and rating' />

            <div className='flex flex-col md:flex-row gap-x-10 gap-y-8'>

                {/* rating and register a comment */}
                <MiniRateBox />

                <Divider className='md:hidden' />

                {/* comments */}
                <div className="w-full text-gray-700">
                    {product.comments.length ?

                        // if comments registered
                        product.comments.map((item, index) =>
                            <React.Fragment key={index * 57}>
                                <Comments {...item} />
                            </React.Fragment>
                        ) :

                        // no any comment there isn't
                        <div className='capitalize'>
                            <h6 className='mb-4 text-lg md:mt-1.5'>
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

export default CommentsContainer;