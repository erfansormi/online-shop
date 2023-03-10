import React, { useState } from 'react'

// mui
import { Divider } from '@mui/material';

// icons
import { IoShieldCheckmarkOutline } from "react-icons/io5";

// context
import { useProductContext } from '../../../../pages/product/[product_id]';

// components
import DiscountPercentage from '../../../utils/price/discountPercentage';
import OldPrice from '../../../utils/price/oldPrice';
import Price from '../../../utils/price/price';
import CartBtns from '../../../utils/buttons/cartBtns';
import ChangeSellerModal from './changeSellerModal';
import SellerSymbol from '../../../utils/seller/sellerSymbol';
import SellerPerformance from '../../../data_display/sellerPerformance';

const SellerBox = () => {
    // context
    const { productInfo, setProductInfo } = useProductContext();
    const { product, selectedSeller, selectedVariant } = productInfo;
    const { seller } = selectedSeller;

    // select seller modal
    const [changeSeller, setChangeSeller] = useState(false);

    return (
        <>
            <div className='border border-solid border-gray-200 w-full p-5 rounded-lg bg-gray-50'>
                <div className='flex flex-col'>

                    {/* title */}
                    <div className='mb-3'>
                        <h5 className='text-xl text-gray-800'>
                            seller
                        </h5>
                    </div>

                    {/* seller detail */}
                    <div className='flex flex-col gap-3 py-5'>
                        <div className="flex justify-between items-center">

                            {/* first seller */}
                            <div className='flex items-center gap-x-1'>
                                <div>
                                    <SellerSymbol shop_name={seller.shop_name} />
                                </div>
                                <div>
                                    <h6 className='text-gray-700 text-md font-bold'>
                                        {seller.shop_name}
                                    </h6>
                                </div>
                            </div>

                            {/* check if other sellers there is? */}
                            {
                                product.sellers.length >= 2 &&
                                <>
                                    <span
                                        className='text-cyan-500 text-sm cursor-pointer'
                                        onClick={() => setChangeSeller(true)}
                                    >
                                        {product.sellers.length - 1} other seller
                                    </span>

                                    {/* change seller modal */}
                                    <ChangeSellerModal
                                        changeSeller={changeSeller}
                                        setChangeSeller={setChangeSeller}
                                    />
                                </>
                            }
                        </div>

                        {/* performance */}
                        <div className='flex items-center gap-1 text-sm'>
                            <SellerPerformance performance={seller.performance} />
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
        </>
    )
}

export default SellerBox;