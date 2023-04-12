import React, { useEffect } from 'react'
import { useRouter } from "next/router";

// contexts
import { useUserContext } from '../../context/userContext';

// components
import Layout from '../../components/layout/layout';
import TabContentTitle from '../../components/data_display/tabContentTitle';
import CartProducts from '../../components/cart/products';
import CartCheckoutBox from '../../components/cart/checkoutBox';
import CartSkeletonPage from '../../components/cart/skeletonPage';

const Cart = () => {
    const { user, loading } = useUserContext();
    const router = useRouter();

    useEffect(() => {
        if (!user && !loading) {
            router.push("/auth/login")
        }
    }, [user, loading])

    return (
        <Layout className='mt-8'>
            {
                !user ?
                    <CartSkeletonPage /> :
                    <div className='flex flex-col'>

                        {/* title */}
                        <div className='mb-10'>
                            <TabContentTitle title='cart' />
                        </div>

                        <div className='flex flex-col md:flex-row gap-4'>

                            {/* products section */}
                            <div className='lg:w-[75%] md:w-[65%] w-full py-4 border-gray-200 border-solid border rounded-lg flex flex-col gap-y-6'>

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
                                        <CartProducts {...item} key={item.product.slug} />
                                    )}
                                </div>
                            </div>

                            {/* checkout info */}
                            <CartCheckoutBox />

                        </div>
                    </div>
            }
        </Layout>
    )
}

export default Cart