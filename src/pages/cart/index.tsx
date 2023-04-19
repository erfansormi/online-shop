import React, { useEffect } from 'react'
import { useRouter } from "next/router";
import Link from "next/link";

// contexts
import { useUserContext } from '../../context/userContext';

// components
import Layout from '../../components/layout/layout';
import TabContentTitle from '../../components/data_display/tabContentTitle';
import CartProducts from '../../components/pages/cart/products';
import CartCheckoutBox from '../../components/pages/cart/checkoutBox';
import CartSkeletonPage from '../../components/pages/cart/skeletonPage';
import TabContentSlider from '../../components/utils/sliders/tabContentSlider';

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

                        {
                            !user.cart.products.length || !user.cart.products_counts ?

                                // empty cart
                                <div className='w-full rounded-lg border border-solid border-gray-200 py-10 px-6'>
                                    <div className='w-full flex flex-col gap-y-6 items-center'>
                                        <div>
                                            <img
                                                alt="empty cart"
                                                src="https://www.digikala.com/statics/img/svg/empty-cart.svg"
                                            />
                                        </div>

                                        <div>
                                            <h6 className='text-gray-800 font-bold text-2xl'>
                                                your cart is empty!
                                            </h6>
                                        </div>
                                        <p className='text-gray-600 text-sm capitalize'>
                                            you can go to the <Link className='text-cyan-500' href={"/products"}>products</Link> page to see more products
                                        </p>
                                    </div>
                                </div> :

                                // valid cart
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
                                                <CartProducts {...item} key={item.product.slug + item.variant.size + item.variant.color + item.seller._id} />
                                            )}
                                        </div>
                                    </div>

                                    {/* checkout info */}
                                    <CartCheckoutBox />

                                </div>
                        }

                        {/* recent visits */}
                        {
                            user.activities.recent_visits.length &&
                            <div className='mt-6 rounded-lg border border-solid border-gray-200'>
                                <TabContentSlider title='recent visits' data={user.activities.recent_visits} />
                            </div>
                        }
                    </div>
            }
        </Layout>
    )
}

export default Cart;