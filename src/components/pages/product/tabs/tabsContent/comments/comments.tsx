import React from 'react';

// mui
import { Divider } from '@mui/material';

// components
import IsSuggest from './isSuggest';

// types
import { Comment } from '../../../../../../types/product/productTypes';

const Comments = ({ comment_text, created_at, rate, is_suggest, title, user }: Comment) => {
    const { unknown, userId } = user;    
    const { first_name, last_name } = userId;

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
                    {/* rate */}
                    <span className={`text-white mr-2 text-base w-[10%] ${handleRateClass(rate)} py-0.25 px-2.5 rounded-md`}>
                        {rate}
                    </span>

                    {/* title */}
                    {
                        title &&
                        <h6 className='inline-block text-lg sm:w-[90%] w-[85%] capitalize mb-5'>
                            {title}
                        </h6>
                    }

                    <div className='inline-flex text-gray-400 text-sm items-center gap-x-3'>

                        {/* date */}
                        <span>
                            {new Date(created_at).toLocaleDateString()}
                        </span>

                        {/* user name */}
                        <div className='text-gray-400 capitalize'>
                            {
                                unknown ?
                                    <span>
                                        online shop user
                                    </span> :
                                    <div className="flex items-center gap-x-1">
                                        <span>{first_name}</span>
                                        <span>{last_name}</span>
                                    </div>
                            }
                        </div>

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