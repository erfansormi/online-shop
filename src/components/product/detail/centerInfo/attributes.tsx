import React, { useState } from 'react'

// context
import { useProductContext } from '../../../../pages/product/[product_id]';

const Attributes = () => {
    // context
    const { productInfo } = useProductContext();

    // state
    const [seeMore, setSeeMore] = useState(false);

    return (
        <div className='capitalize flex flex-col mt-2'>
            <h5 className='text-gray-800 mb-4'>
                Attributes
            </h5>

            <ul className={`flex flex-col px-2 list-inside list-disc marker:text-gray-500 transition-[height] ease-in-out duration-300 ${seeMore ? "h-[156px]" : "h-[85px]"} overflow-hidden`}>
                {productInfo.product.attributes.map((item, index) =>
                    <li className='flex gap-x-2 mb-3.5 last:mb-0' key={index * 39}>

                        {/* attribute name */}
                        <span className='text-gray-500 list-item'>
                            {item.name} :
                        </span>

                        {/* attribute value */}
                        <span className='font-bold text-gray-700'>
                            {item.value}
                        </span>
                    </li>
                )}
            </ul>
            <span
                className='cursor-pointer text-cyan-500 px-2 mt-5 w-fit'
                onClick={() => setSeeMore(!seeMore)}
            >
                {seeMore ?
                    "see less" :
                    "see more"
                }
            </span>
        </div>
    )
}

export default Attributes;