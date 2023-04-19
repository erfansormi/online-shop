import React from 'react';
import Link from "next/link";

// contexts
import { useUserContext } from '../../../context/userContext';

// mui
import { Button } from '@mui/material';

const CartCheckoutBox = () => {
    const { user } = useUserContext();

    return (
        <div className='lg:w-[25%] md:w-[35%] w-full text-gray-800 font-medium md:sticky top-24 capitalize px-6 py-8 h-fit border-gray-200 border-solid border rounded-lg flex flex-col gap-y-6'>

            {/* products prices */}
            <div className='flex items-center justify-between text-gray-600'>
                <span>price of products ({user?.cart.products_counts})</span>
                <span>${user?.cart.products_prices}</span>
            </div>

            {/* total cart prices */}
            <div className='flex items-center justify-between'>
                <span>total cart</span>
                <span>${user?.cart.total_prices_cart}</span>
            </div>

            {/* total profit */}
            {
                user?.cart.total_profit ?
                    <div className='flex items-center justify-between text-red-500'>
                        <span>your profit</span>
                        <span>${user?.cart.total_profit} ({user?.cart.total_profit_percentage}%)</span>
                    </div> :
                    null
            }

            {/* order registration */}
            <div>
                <Link href="/checkout/shipping">
                    <Button variant="contained" fullWidth>
                        order registration
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default CartCheckoutBox;