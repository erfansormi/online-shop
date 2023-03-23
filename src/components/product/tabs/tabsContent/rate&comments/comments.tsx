import React from 'react';

// mui
import { Divider } from '@mui/material';

// components
import IsSuggest from './isSuggest';

// types
import { Comment } from '../../../../../types/product/productTypes';

const Comments = ({ comment_text, created_at, is_buyer, rate, user, is_suggest, purchased_product, title }: Comment) => {
    // handle rate className
    const handleRateClass = (rate: number) => {
        let className = "";

        if (rate > 4) {
            className = "bg-green-600"
        }
        else if (rate > 3) {
            className = "bg-green-400"
        }
        else if (rate > 2) {
            className = "bg-amber-400"
        }
        else {
            className = "bg-red-500"
        }

        return className;
    }

    return (
        <>
            <div className="first:pt-1 pt-5 pb-10 flex flex-col gap-y-3">

                {/* header */}
                <div>
                    <div className='mb-5'>
                        {/* rate */}
                        <span className={`text-white mr-2 text-base w-[10%] ${handleRateClass(rate)} py-0.25 px-2.5 rounded-md`}>
                            {rate}
                        </span>

                        {/* title */}
                        {
                            title &&
                            <h6 className='inline-block text-lg w-[90%] capitalize'>
                                {title}
                            </h6>
                        }
                    </div>

                    <div className='inline-flex'>

                        {/* date */}
                        <span className="text-gray-500 text-sm">
                            {new Date(created_at).toLocaleDateString()}
                        </span>
                    </div>
                </div>

                <Divider className='border-gray-100' />

                <div className='gap-y-4 flex flex-col'>
                    {/* is suggest? */}
                    <IsSuggest suggest={is_suggest} />

                    {/* comment text */}
                    <p className="text-gray-700 text-base">
                        {comment_text}
                    </p>
                </div>
            </div>
            <Divider />
        </>
    )
}

export default Comments;