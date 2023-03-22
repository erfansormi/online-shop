import React, { useRef, useState } from 'react'

// context
import { useProductContext } from '../../productContainer';

const Attributes = () => {
    // context
    const { productInfo } = useProductContext();

    // attribute list ref
    type UlRef = React.LegacyRef<HTMLUListElement> | undefined;
    const ulRef: UlRef = useRef(null);

    // states
    const [seeMore, setSeeMore] = useState(false);
    const [ulHeight, setUlHeight] = useState(87);

    return (
        <div className='capitalize flex flex-col mt-2'>
            <h4 className='text-gray-800 mb-4 text-lg'>
                Attributes
            </h4>

            <ul
                ref={ulRef}
                className={`flex flex-col px-2 list-inside list-disc marker:text-gray-500 transition-height ease-in-out duration-300 overflow-hidden`}
                style={{ height: ulHeight }}
            >
                {productInfo.product.attributes.map((item, index) =>
                    <li
                        className='flex gap-x-2 mb-3.5 last:mb-0'
                        key={index * 39}
                    >

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

            {/* handle see more or less */}
            {
                productInfo.product.attributes.length > 3 &&
                <span
                    className='cursor-pointer text-cyan-500 px-2 mt-5 w-fit'
                    onClick={() => {
                        setSeeMore(!seeMore);
                        if (ulRef.current) {
                            if (!seeMore) {
                                setUlHeight(ulRef.current.scrollHeight)
                            }
                            else {
                                setUlHeight(87)
                            }
                        }
                    }}
                >
                    {seeMore ?
                        "see less" :
                        "see more"
                    }
                </span>
            }
        </div>
    )
}

export default Attributes;