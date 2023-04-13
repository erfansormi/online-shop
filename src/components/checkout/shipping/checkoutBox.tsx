import React from 'react'
import Link from "next/link";

// context
import { useUserContext } from '../../../context/userContext';

// checkout store
import useCheckout from '../../../store/checkout';

// mui
import { Button } from '@mui/material';

const CheckoutBox = () => {
    const { user } = useUserContext();
    const checkout = useCheckout(state => state);

    return (
        <div className='sticky top-24 p-5 capitalize border-gray-200 border-solid rounded-lg border'>
            <div className='px-2 py-4 flex items-center justify-between text-gray-700 border-b-gray-200'>
                <span>
                    price of products ({user?.cart.products_counts})
                </span>
                <span className='font-medium'>
                    ${user?.cart.total_prices_cart}
                </span>
            </div>

            <div className='px-2 py-4 flex items-center justify-between text-gray-700 border-b-gray-200'>
                <span>
                    shipping cost
                </span>
                <span className='font-medium'>
                    $6
                </span>
            </div>

            <div className='px-2 py-4 flex items-center justify-between text-gray-700'>
                <span>
                    payable
                </span>
                <span className='font-medium'>
                    ${user?.cart.total_prices_cart ? user?.cart.total_prices_cart + 6 : ""}
                </span>
            </div>

            {/* actions buttons */}
            <div className='mt-3'>
                {
                    checkout.deliveryHour && checkout.deliveryDate ?
                        <Link href="/checkout/payment">
                            <Button variant="contained" fullWidth>
                                register order
                            </Button>
                        </Link> :
                        <Button variant="outlined" fullWidth>
                            choose shipping time
                        </Button>
                }
            </div>
        </div>
    )
}

export default CheckoutBox;