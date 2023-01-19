import React from 'react'
import Image from 'next/image';

// mui
import { Button, Divider } from '@mui/material';

// icons
import { IoShieldCheckmarkOutline } from "react-icons/io5";

// context
import { useProductDetail } from '../../../pages/product/[product_id]';

// components
import DiscountPercentage from '../../utils/price/discountPercentage';
import OldPrice from '../../utils/price/oldPrice';
import Price from '../../utils/price/price';

const PriceBox = () => {
    const { price, rating } = useProductDetail();

    return (
        <div className='border border-solid border-gray-300 w-full p-5 rounded-lg'>
            <div className='flex flex-col'>

                {/* title */}
                <div className='mb-3'>
                    <h5 className='text-xl text-gray-800'>
                        seller
                    </h5>
                </div>

                {/* saller detail */}
                <div className='flex flex-col gap-3 py-5'>
                    <div className='flex items-center gap-3'>
                        <div>
                            <Image
                                src={"/images/shop-logo.png"}
                                alt={"online shop logo"}
                                width={30}
                                height={30}
                            />
                        </div>
                        <div>
                            <h6 className='text-gray-700 text-lg font-medium'>
                                online shop
                            </h6>
                        </div>
                    </div>
                    <div className='flex items-center gap-1 text-sm'>
                        <span className='text-green-500' >Great</span>
                        <span className='text-gray-600'>Prformance</span>
                    </div>
                </div>

                <Divider />

                {/* Guarantee */}
                <div className='flex gap-3 text-gray-600 py-5'>
                    <span className='flex text-xl'>
                        <IoShieldCheckmarkOutline />
                    </span>
                    <p className='text-sm'>Guarantee of physical health of the goods</p>
                </div>

                <Divider />

                {/* Price */}
                <div className='flex flex-col gap-4 py-5'>
                    <div className='flex items-center gap-4'>

                        {/* discount percentage */}
                        <DiscountPercentage discount={rating.count / 100} size={"large"} />

                        {/* old price */}
                        <OldPrice oldPrice={price} size={"large"} />

                    </div>

                    {/* new price */}
                    <Price price={Number((price * (100 - (rating.count / 100))) / 100)} size="large" />
                </div>

                {/* button */}
                <div className='mt-5'>
                    <Button variant={"contained"} fullWidth>
                        add to cart
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PriceBox;