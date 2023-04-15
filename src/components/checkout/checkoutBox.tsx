import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";
import { axiosInstance } from '../../functions/axiosInstance';

// toast
import { toastify } from '../utils/toastify/toastifyFunc';

// contexts
import { useUserContext } from '../../context/userContext';
import { useGeneralContext } from '../../context/generalContext';

// checkout store
import useCheckout from '../../store/checkout';

// mui
import { Button } from '@mui/material';

const CheckoutBox = ({ type }: { type: "payment" | "shipping" }) => {
    const { user, setUser } = useUserContext();
    const { closeLoading, openLoading } = useGeneralContext();
    const router = useRouter();

    const checkout = useCheckout(state => state);

    const handleOrder = async () => {
        openLoading()

        await axiosInstance.post("/api/v1/users/register-payment", {
            addressId: checkout.selectedAddressId,
            deliveryDate: checkout.deliveryDate,
            deliveryTime: checkout.deliveryHour
        })
            .then(res => {
                router.push("/profile/orders");
                setUser(res.data.user);
                toastify(res.data.message, "success");
            })
            .catch(err => {
                toastify(err.response.data.message || err.message, "error");
            })
            .finally(() => {
                closeLoading();
            })
    }

    return (
        <div className='sticky top-24 p-5 capitalize border-gray-200 border-solid rounded-lg border'>
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

            {/* actions buttons */}
            <div className='mt-3'>
                {
                    type === "shipping" && checkout.deliveryHour && checkout.deliveryDate ?
                        <Link href="/checkout/payment">
                            <Button variant="contained" fullWidth>
                                register order
                            </Button>
                        </Link> :
                        type === "shipping" && !checkout.deliveryHour ?
                            <a href='#shipping-time'>
                                <Button variant="outlined" fullWidth>
                                    choose shipping time
                                </Button>
                            </a> :
                            type === "payment" &&
                            <Button variant="contained" fullWidth onClick={handleOrder}>
                                payment
                            </Button>
                }
            </div>
        </div>
    )
}

export default CheckoutBox;