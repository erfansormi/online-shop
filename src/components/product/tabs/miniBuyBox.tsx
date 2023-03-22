import React, { useState } from 'react'

// mui
import { Divider } from '@mui/material';

// icons
import { IoShieldCheckmarkOutline } from "react-icons/io5";

// context
import { useProductContext } from '../productContainer';

// handle product color
import { handleColor } from '../detail/centerInfo/contentData';

// components
import DiscountPercentage from '../../utils/price/discountPercentage';
import OldPrice from '../../utils/price/oldPrice';
import Price from '../../utils/price/price';
import CartBtns from '../../utils/buttons/cartBtns';
import ChangeSellerModal from '../detail/sellerSection/changeSellerModal';
import SellerSymbol from '../../utils/seller/sellerSymbol';
import SellerPerformance from '../../data_display/sellerPerformance';
import Image from 'next/image';

// icons
import { TbArrowAutofitContent } from 'react-icons/tb';

const MiniBuyBox = () => {

    // context
    const { productInfo } = useProductContext();
    const { product, selectedSeller, selectedVariant } = productInfo;
    const { seller } = selectedSeller;

    return (
        <div className='border border-solid border-gray-200 w-full p-5 rounded-lg bg-gray-50'>
            <div className='flex flex-col'>

                {/* product detail */}
                <div className='flex justify-between items-center gap-x-4 py-3'>

                    {/* image */}
                    <div>
                        <Image
                            src={product.image}
                            alt={product.title}
                            width={80}
                            height={120}
                            className="h-auto"
                        />
                    </div>

                    <div className='flex flex-col gap-y-1'>

                        {/* title */}
                        <h6 className='ellipsis-2 text-sm text-gray-600'>
                            {product.title}
                        </h6>

                        {/* color */}
                        <div className='flex items-center gap-x-2'>
                            <span className={`w-3 h-3 rounded-full ${handleColor(selectedVariant.selectedColor)}`}></span>
                            <span className="text-sm text-gray-600 capitalize">{selectedVariant.selectedColor}</span>
                        </div>

                        {/* size if there are */}
                        {
                            selectedVariant.size &&
                            <div className='flex items-center gap-x-2 text-sm text-gray-700'>
                                <span className='text-[1.3rem]'>
                                    <TbArrowAutofitContent />
                                </span>
                                <span className='font-bold uppercase'>{selectedVariant.size}</span>
                            </div>
                        }
                    </div>
                </div>

                <Divider />

                {/* seller detail */}
                <div className='flex flex-col gap-3 py-4'>
                    <div className="flex justify-between items-center">

                        {/* selected seller */}
                        <div className='flex items-center gap-x-1'>
                            <div>
                                <SellerSymbol size='small' shop_name={selectedSeller.seller.shop_name} />
                            </div>
                            <div>
                                <h6 className='text-gray-700 text-sm font-bold'>
                                    {selectedSeller.seller.shop_name}
                                </h6>
                            </div>
                        </div>
                    </div>

                    {/* performance */}
                    <div className='flex items-center gap-1 text-[0.8rem]'>
                        <SellerPerformance performance={selectedSeller.seller.performance} />
                    </div>
                </div>

                <Divider />

                {/* Guarantee */}
                <div className='flex gap-3 text-gray-600 py-4'>
                    <span className='flex text-xl'>
                        <IoShieldCheckmarkOutline />
                    </span>
                    <p className='text-sm'>Guarantee of physical health of the goods</p>
                </div>

                <Divider />

                {/* Price */}
                <div className='flex flex-col gap-3 py-4'>

                    {/* check if discount there is? */}
                    {
                        selectedVariant.discount_percentage && selectedVariant.old_price ?
                            <>
                                <div className='flex items-center gap-4'>

                                    {/* discount percentage */}
                                    <DiscountPercentage discount={selectedVariant.discount_percentage} size={"large"} />

                                    {/* old price */}
                                    <OldPrice oldPrice={selectedVariant.old_price} size={"large"} />

                                </div>

                                {/* current price */}
                                <Price price={selectedVariant.price} size="large" />
                            </> :

                            // current price
                            <Price price={selectedVariant.price} size="large" />
                    }
                </div>

                {/* button */}
                {/* <CartBtns product={product} /> */}
            </div>
        </div>
    )
}

export default MiniBuyBox;