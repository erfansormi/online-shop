import React, { useEffect } from 'react'
import { useRouter } from 'next/router';

// context
import { useUserContext } from '../../context/userContext';

// components
import Layout from '../../components/layout/layout'
import CheckoutHeader from '../../components/checkout/header';
import CheckoutBox from '../../components/checkout/shipping/checkoutBox';
import OrderDeliveryAddress from '../../components/checkout/shipping/orderDeliveryAddress';
import CheckoutSkeleton from '../../components/checkout/checkoutSkeleton';

const Shipping = () => {
    const { user, loading } = useUserContext();

    useEffect(() => {
        if (!user && !loading) {
            useRouter().push("/auth/login")
        }
    }, [user, loading])

    return (
        <Layout className='mt-10'>
            {
                !user && loading ?
                    <CheckoutSkeleton /> :
                    user && !loading &&
                    <div className='flex flex-col gap-y-3'>
                        <CheckoutHeader type='shipping' />
                        <div className='flex gap-x-3'>
                            <aside className='lg:w-1/4 w-full'>
                                <CheckoutBox />
                            </aside>
                            <section className='w-full flex flex-col gap-y-3'>
                                <OrderDeliveryAddress />
                            </section>
                        </div>
                    </div>
            }
        </Layout>
    )
}

export default Shipping;