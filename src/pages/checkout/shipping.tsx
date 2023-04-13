import React, { useEffect } from 'react'
import { useRouter } from 'next/router';

// context
import { useUserContext } from '../../context/userContext';

// icons
import { BiTimeFive } from 'react-icons/bi';

// components
import Layout from '../../components/layout/layout'
import CheckoutHeader from '../../components/checkout/header';
import CheckoutBox from '../../components/checkout/shipping/checkoutBox';
import OrderDeliveryAddress from '../../components/checkout/shipping/orderDeliveryAddress';
import CheckoutSkeleton from '../../components/checkout/checkoutSkeleton';
import SelectedProducts from '../../components/checkout/shipping/selectedProducts';
import ChooseShippingTime from '../../components/checkout/shipping/chooseShippingTime';

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
                        <div className='flex flex-col md:flex-row gap-3'>

                            {/* checkout box */}
                            <aside className='w-full md:w-2/5 lg:w-[28%] xl:w-1/4'>
                                <CheckoutBox />
                            </aside>

                            {/* checkout detail */}
                            <section className='w-full md:w-3/5 lg:w-[72%] xl:w-3/4 flex flex-col gap-y-3'>

                                {/* order delivery address */}
                                <OrderDeliveryAddress />

                                <div className='border border-solid border-gray-200 rounded-lg py-12 px-6'>
                                    {/* selected products */}
                                    <SelectedProducts />

                                    {/* choose shipping time */}
                                    <div className='mt-14 flex flex-col gap-y-4'>
                                        <div className='flex items-center gap-x-1 text-gray-700 capitalize'>
                                            <span className='flex text-xl'>
                                                <BiTimeFive />
                                            </span>
                                            <span>
                                                choose a shipping time
                                            </span>
                                        </div>

                                        <div className='pb-10 border border-solid border-gray-200 rounded-lg'>
                                            <ChooseShippingTime />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
            }
        </Layout>
    )
}

export default Shipping;