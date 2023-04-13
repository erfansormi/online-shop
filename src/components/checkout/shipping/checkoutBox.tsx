import React from 'react'

// context
import { useUserContext } from '../../../context/userContext';
import { Button } from '@mui/material';

const CheckoutBox = () => {
    const { user } = useUserContext();

    return (
        <div className='sticky top-12 p-5 capitalize border-gray-200 border-solid rounded-lg border'>
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

            <div className='mt-2'>
                <Button variant="outlined" fullWidth>
                    choose shipping time
                </Button>
            </div>
        </div>
    )
}

export default CheckoutBox;