import React from 'react'

// user context hook
import { useUserContext } from '../../../../../context/userContext';

// types
import { Addresses, User } from '../../../../../types/user/userTypes';

// icons
import { FaCity } from 'react-icons/fa';
import { BsSignpost } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { BiUser } from 'react-icons/bi';

// components
import { Skeleton } from '@mui/material';
import Map, { Marker } from "react-map-gl";

// data
export const addressItems = (address: Addresses, user: User) => {
    return [
        {
            icon: <FaCity />,
            value: address.city
        },
        {
            icon: <BsSignpost />,
            value: address.postal_code
        },
        {
            icon: <FiMail />,
            value: user.email
        },
        {
            icon: <BiUser />,
            value: `${user.first_name} ${user.last_name}`
        },
    ]
}

const RegisteredAddresses = () => {
    // user context
    const { user, loading } = useUserContext();

    return (
        <div>
            {
                // user loading
                loading ?
                    [...Array(3)].map((item, index) =>
                        <div key={index * 10} className='flex flex-col gap-y-5 py-5 border-b border-t-0 border-x-0 border-gray-200 border-solid'>
                            <div>
                                <Skeleton className='w-4/6' />
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='flex flex-col gap-y-2.5'>
                                    <Skeleton className='w-20 h-4' />
                                    <Skeleton className='w-20 h-4' />
                                    <Skeleton className='w-20 h-4' />
                                    <Skeleton className='w-20 h-4' />
                                </div>
                                <div>
                                    <Skeleton className='w-44 h-32 scale-100' />
                                </div>
                            </div>
                        </div>
                    ) :
                    // user addresses
                    user && user.addresses.length ?
                        user.addresses.map((address, index) =>
                            <div
                                key={index * 88}
                                className='flex flex-col gap-y-6 py-4 border-b border-t-0 border-x-0 border-gray-200 border-solid last:border-b-0'
                            >
                                {/* postal address */}
                                <div>
                                    <p className='text-gray-700 font-medium text-base'>
                                        {address.postal_address}
                                    </p>
                                </div>

                                {/* other info */}
                                <div className='flex justify-between'>
                                    <div className='flex flex-col gap-y-2 text-gray-500 text-sm'>
                                        {
                                            addressItems(address, user).map((item, index) =>
                                                <span className='flex items-center gap-x-1 leading-6' key={index * 90}>
                                                    <span className='flex text-lg'>
                                                        {item.icon}
                                                    </span>
                                                    <span className='flex'>
                                                        {item.value}
                                                    </span>
                                                </span>
                                            )
                                        }
                                    </div>

                                    {/* mini map */}
                                    <div className='w-32 h-32 rounded-lg overflow-hidden'>
                                        <Map
                                            mapStyle="mapbox://styles/mapbox/streets-v11"
                                            mapboxAccessToken={process.env.MAPBOX_ACCESS_TOKEN as string}
                                            longitude={address.coordinates[0]}
                                            latitude={address.coordinates[1]}
                                            zoom={12.5}
                                            cursor='default'
                                        >
                                            <Marker
                                                longitude={address.coordinates[0]}
                                                latitude={address.coordinates[1]}
                                                scale={0.4}
                                                color='#222'
                                                style={{ cursor: "default" }}
                                            />
                                        </Map>
                                    </div>
                                </div>
                            </div>
                        )
                        :
                        // when no any address not registered
                        <div className='text-gray-700 text-base capitalize mt-2 py-6 px-2'>
                            <p>
                                you have not entered an address yet!
                            </p>
                        </div>
            }
        </div>
    )
}

export default RegisteredAddresses