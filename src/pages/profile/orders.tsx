import React, { useEffect } from 'react'
import Link from "next/link";
import { useRouter } from "next/router";

// context
import { useUserContext } from '../../context/userContext'

// components
import ProfileContainer from '../../components/profile/profileContainer'
import CheckoutSkeleton from "../../components/checkout/checkoutSkeleton";
import TabContentSlider from '../../components/utils/sliders/tabContentSlider';
import OrdersHistory from '../../components/profile/pages/orders/ordersHistory';

const Orders = () => {
    const { user, loading } = useUserContext();
    const router = useRouter();

    useEffect(() => {
        if (!user && !loading) {
            router.push("/auth/login")
        }
    }, [user, loading])

    return (
        <ProfileContainer>
            {
                !user ?
                    // loading
                    <CheckoutSkeleton /> :
                    <>
                        {
                            // empty orders
                            !user.orders.length ?
                                <div className='w-full rounded-lg border border-solid border-gray-200 py-10 px-6'>
                                    <div className='w-full flex flex-col gap-y-6 items-center'>
                                        <div>
                                            <h6 className='text-gray-800 font-bold text-2xl'>
                                                your orders is empty!
                                            </h6>
                                        </div>
                                        <p className='text-gray-600 text-sm capitalize'>
                                            you can go to the <Link className='text-cyan-500' href={"/products"}>products</Link> page to see products and buy!
                                        </p>
                                    </div>
                                </div>
                                :

                                // orders history
                                <OrdersHistory />
                        }

                        {/* recent visits */}
                        {
                            user.activities.recent_visits.length &&
                            <div className='rounded-lg border border-solid border-gray-200'>
                                <TabContentSlider title='recent visits' data={user.activities.recent_visits} />
                            </div>
                        }
                    </>
            }
        </ProfileContainer>
    )
}

export default Orders