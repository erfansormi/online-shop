import React, { useEffect } from 'react'
import { useRouter } from "next/router";

// contexts
import { useUserContext } from '../../context/userContext'

// components
import Layout from '../../components/layout/layout';
import TabContentTitle from '../../components/data_display/tabContentTitle';
import CartProducts from '../../components/cart/products';
import { Button } from '@mui/material';

const Cart = () => {
    const { user, loading } = useUserContext();
    const router = useRouter();

    useEffect(() => {
        if (!user && !loading) {
            router.push("/auth/login")
        }
    }, [])

    return (
        <>
            {
                !user ?
                    <div className='min-h-[80vh]'>
                    </div>
                    :
                    <Layout className='mt-8'>
                        <div className='flex flex-col'>

                            {/* title */}
                            <div className='mb-10'>
                                <TabContentTitle title='cart' />
                            </div>

                            <div className='flex gap-x-4'>

                                {/* products section */}
                                <div className='w-[75%] py-4 border-gray-200 border-solid border rounded-lg flex flex-col gap-y-6'>

                                    {/* title */}
                                    <div className='flex flex-col px-6 pt-2'>
                                        <div className='flex flex-col gap-y-2'>
                                            <h5 className='text-gray-800'>
                                                your cart
                                            </h5>
                                            <span className='text-gray-500 text-xs'>
                                                {user.cart.products_counts} products
                                            </span>
                                        </div>
                                    </div>

                                    {/* products */}
                                    <div>
                                        {user.cart.products.map(item =>
                                            <CartProducts {...item} />
                                        )}
                                    </div>
                                </div>

                                {/* checkout info */}
                                <div className='text-gray-800 font-medium sticky top-24 w-[25%] capitalize px-6 py-8 h-fit border-gray-200 border-solid border rounded-lg flex flex-col gap-y-6'>

                                    {/* products prices */}
                                    <div className='flex items-center justify-between text-gray-600'>
                                        <span>price of products ({user.cart.products_counts})</span>
                                        <span>${user.cart.products_prices}</span>
                                    </div>

                                    {/* total cart prices */}
                                    <div className='flex items-center justify-between'>
                                        <span>total cart</span>
                                        <span>${user.cart.total_prices_cart}</span>
                                    </div>

                                    {/* total profit */}
                                    {
                                        user.cart.total_profit ?
                                            <div className='flex items-center justify-between text-red-500'>
                                                <span>your profit</span>
                                                <span>${user.cart.total_profit} ({user.cart.total_profit_percentage}%)</span>
                                            </div> :
                                            null
                                    }

                                    {/* order registration */}
                                    <div>
                                        <Button variant="contained" fullWidth>
                                            order registration
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Layout>
            }
        </>
    )
}

export default Cart