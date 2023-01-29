import React from 'react'
import Image from 'next/image';

// mui
import { Divider } from '@mui/material';

// icons
import { IoShieldCheckmarkOutline } from "react-icons/io5";

// redux
import { useSelector } from 'react-redux';
import { State } from '../../../redux/store';

// components
import DiscountPercentage from '../../utils/price/discountPercentage';
import OldPrice from '../../utils/price/oldPrice';
import Price from '../../utils/price/price';
import CartBtns from '../../utils/buttons/cartBtns';

const PriceBox = () => {
    // redux
    const product = useSelector((state: State) => state.productDetail.product)

    return (
        <>
            {
                product ?
                    <div className='border border-solid border-gray-200 w-full p-5 rounded-lg bg-gray-50'>
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
                                    <DiscountPercentage discount={product.rating.count / 100} size={"large"} />

                                    {/* old price */}
                                    <OldPrice oldPrice={product.price} size={"large"} />

                                </div>

                                {/* new price */}
                                <Price price={Number((product.price * (100 - (product.rating.count / 100))) / 100)} size="large" />
                            </div>

                            {/* button */}
                            <CartBtns product={product} />
                        </div>
                    </div >
                    : null
            }
        </>
    )
}

export default PriceBox;