import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { DateObject } from 'react-multi-date-picker';

// context
import { useUserContext } from '../../context/userContext';

// checkout store
import useCheckout from '../../store/checkout';

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
    const { deliveryHour, deliveryDate } = useCheckout(state => state);
    const date = new DateObject();

    useEffect(() => {
        if (!user && !loading) {
            useRouter().push("/auth/login")
        }
    }, [user, loading])

    return (
        <Layout className='md:mt-10 mt-3'>
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

                                    {/* selected time */}
                                    {
                                        deliveryDate && deliveryHour ?
                                            <span className='mt-4 text-sm text-gray-700 flex gap-x-2'>
                                                <span className='text-gray-500'>
                                                    shipping time
                                                </span>
                                                <span className='font-medium'>
                                                    {date.weekDays[+deliveryHour.split("-")[2]].name} - {deliveryHour.split("-")[0]} to {deliveryHour.split("-")[1]}
                                                </span>
                                            </span> :
                                            null
                                    }
                                </div>
                            </section>
                        </div>
                    </div>
            }
        </Layout>
    )
}

export default Shipping;