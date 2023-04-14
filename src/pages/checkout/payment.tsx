import React, { useEffect } from 'react';
import { useRouter } from "next/router";

// toast
import { toastify } from '../../components/utils/toastify/toastifyFunc';

// stores
import useCheckout from '../../store/checkout';
import { useUserContext } from '../../context/userContext';

// components
import Layout from '../../components/layout/layout';
import CheckoutSkeleton from '../../components/checkout/checkoutSkeleton';
import CheckoutHeader from '../../components/checkout/header';
import CheckoutBox from '../../components/checkout/checkoutBox';
import PaymentMethod from '../../components/checkout/payment/paymentMethod';
import OrderSummary from '../../components/checkout/payment/orderSummary';

const Payment = () => {
    const { user, loading } = useUserContext();
    const { deliveryHour, deliveryDate } = useCheckout(state => state);
    const router = useRouter();

    useEffect(() => {
        if (!user && !loading) {
            router.push("/auth/login");
        }

        if (user && !loading && !deliveryHour) {
            toastify("please choose shipping time!", "warning");
            router.push("/checkout/shipping");
        }

        if (!user?.cart.products.length || !user.cart.products_counts) {
            router.push("/");
        }
    }, [user, loading, deliveryHour, deliveryDate])

    return (
        <Layout className='md:mt-10 mt-3'>
            {
                !user && loading ?
                    <CheckoutSkeleton /> :
                    user && !loading &&
                    <div className='flex flex-col gap-y-3'>
                        <CheckoutHeader type='payment' />
                        <div className='flex flex-col-reverse md:flex-row gap-3'>

                            {/* checkout box */}
                            <aside className='w-full md:w-2/5 lg:w-[28%] xl:w-1/4'>
                                <CheckoutBox type='payment' />
                            </aside>

                            {/* payment detail */}
                            <section className='w-full md:w-3/5 lg:w-[72%] xl:w-3/4 flex flex-col gap-y-3'>

                                {/* choose payment method */}
                                <PaymentMethod />

                                {/* order summary */}
                                <OrderSummary />
                            </section>
                        </div>
                    </div>
            }
        </Layout>
    )
}

export default Payment;