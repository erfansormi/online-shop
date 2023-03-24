import React from 'react';
import { Divider, Skeleton } from '@mui/material';

// context
import { useProductContext } from '../../../productContainer';

// components
import TabsTitle from '../tabsTitle';
import MiniRateBox from './miniRateBox';
import Comments from './comments';

const CommentsContainer = () => {
    // context
    const { commentsLoading, comments } = useProductContext();

    return (
        <div>
            {/* title */}
            <TabsTitle title='comments and rating' />

            <div className='flex flex-col lg:flex-row gap-x-10 gap-y-8'>

                {/* rating and register a comment */}
                <MiniRateBox />

                <Divider className='md:hidden' />

                {/* comments */}
                <div className="w-full text-gray-700">
                    {

                        commentsLoading ?
                            [...Array(4)].map((item, index) =>
                                <div key={index * 68}>
                                    <div className='flex flex-col gap-y-2 my-8'>
                                        <Skeleton className='w-[10%]' />
                                        <Skeleton className='w-[30%]' />
                                        <Divider className='border-gray-100' />
                                        <div>
                                            <Skeleton className='w-[100%]' />
                                            <Skeleton className='w-[100%]' />
                                            <Skeleton className='w-[50%]' />
                                        </div>
                                    </div>
                                    <Divider />
                                </div>
                            ) :
                            comments.length ?
                                // if comments registered
                                comments.map((item, index) =>
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
        </div >
    )
}

export default CommentsContainer;