import React, { useState } from 'react'
import Link from "next/link";

// mui
import { Divider, Button } from '@mui/material';

// icons
import { IoShieldCheckmarkOutline } from "react-icons/io5";

// contexts
import { useProductContext } from '../../productContainer';
import { useUserContext } from '../../../../../context/userContext';

// components
import DiscountPercentage from '../../../../utils/price/discountPercentage';
import OldPrice from '../../../../utils/price/oldPrice';
import Price from '../../../../utils/price/price';
import CartButtons from '../../../../utils/buttons/cartButtons';
import ChangeSellerModal from './changeSellerModal';
import SellerSymbol from '../../../../utils/seller/sellerSymbol';
import SellerPerformance from '../../../../data_display/sellerPerformance';

const SellerBox = () => {
    // context
    const { user } = useUserContext();

    const { productInfo } = useProductContext();
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

                    {/* action buttons */}
                    {
                        user ?
                            // cart action
                            <CartButtons
                                productId={product._id}
                                selectedVariant={{
                                    selectedColor: selectedVariant.selectedColor,
                                    variantId: selectedVariant._id
                                }}
                                sellerId={seller._id}
                            /> :
                            // login
                            <div>
                                <Link href={"/auth/login"}>
                                    <Button variant="outlined" fullWidth>
                                        login
                                    </Button>
                                </Link>
                            </div>
                    }
                </div>
            </div>
        </>
    )
}

export default SellerBox;