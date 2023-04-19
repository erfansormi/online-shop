import React, { useEffect } from 'react'
import Link from "next/link";

// context
import { useUserContext } from '../../../../context/userContext';

// icons
import { IoIosArrowForward } from 'react-icons/io';

// checkout store
import useCheckout from '../../../../store/checkout';

// components
import ChangeAddressModal from './changeAddressModal';
import { Alert } from '@mui/material';
import MapboxModal from '../../profile/pages/addresses/map/mapbox';
import AddressDetailModal from '../../profile/pages/addresses/addressDetail/addressDetailModal';

const OrderDeliveryAddress = () => {
    const { user } = useUserContext();
    const checkout = useCheckout(state => state);

    useEffect(() => {
        if (user && user.addresses.length) {
            checkout.setSelectedAddressId(user.addresses[0]._id)
        }
    }, [])

    return (
        <div className='border border-gray-200 border-solid p-5 rounded-lg'>
            <div className='flex flex-col gap-y-4'>
                <span className='text-sm text-gray-500'>
                    order delivery address
                </span>

                {/* postal address */}
                <div className='text-base font-medium text-gray-700'>
                    {
                        user && user.addresses.length ?

                            // postal address
                            <p>
                                {
                                    user.addresses.find(item => item._id === checkout.selectedAddressId)?.postal_address
                                    ||
                                    user.addresses[0].postal_address
                                }
                            </p> :

                            // if not registered any address
                            <div className='capitalize'>
                                <Alert className='text-base items-center' severity="warning">
                                    you have not registered any address — first, register your address!
                                </Alert>
                            </div>
                    }
                </div>

                {/* user first and last name */}
                <div className='text-gray-600 capitalize'>
                    <span>
                        {user?.first_name} {user?.last_name}
                    </span>
                </div>

                <div className='text-cyan-500 flex justify-end gap-x-1'>
                    {
                        user && user.addresses.length ?
                            // change delivery address 
                            <div
                                className='cursor-pointer w-fit flex items-center'
                                onClick={() => checkout.setDeliveryAddressModal(true)}
                            >
                                <p>
                                    change address
                                </p>
                                <span className='flex mt-0.5'>
                                    <IoIosArrowForward />
                                </span>
                            </div> :

                            // link to user addresses
                            <Link className='flex items-center' href={"/profile/addresses"}>
                                register address
                                <span className='flex mt-0.5'>
                                    <IoIosArrowForward />
                                </span>
                            </Link>
                    }
                </div>

                {/* delivery address modal */}
                <ChangeAddressModal />

                {/* mapbox modal */}
                <MapboxModal />

                {/* address detail modal */}
                <AddressDetailModal />
            </div>
        </div>
    )
}

export default OrderDeliveryAddress;