import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { DateObject } from 'react-multi-date-picker';
import { useUserContext } from '../../../../context/userContext';

// components
import { Divider } from '@mui/material';
import ProfileContentContainer from '../../profileContentContainer';
import { handleColor } from '../../../product/detail/centerInfo/contentData';

const OrdersHistory = () => {
    const { user } = useUserContext();
    const date = new DateObject();

    return (
        <ProfileContentContainer>
            <div className='flex flex-col gap-6 px-3 py-8'>
                {/* title */}
                <div>
                    <h6 className='text-gray-700 text-xl'>
                        orders history
                    </h6>
                </div>

                {/* orders */}
                <div className='w-full flex flex-col gap-5'>
                    {
                        user?.orders.map((item, index) =>
                            <div
                                key={index * 110}
                                className='w-full rounded-lg border border-solid border-gray-200 flex flex-col gap-5 py-10 px-6 text-base'
                            >

                                {/* order info */}
                                <div className='flex flex-wrap items-center gap-4 text-gray-700 capitalize'>

                                    {/* delivery date */}
                                    <span className='text-gray-500 flex items-center gap-x-1'>
                                        <span>
                                            {date.setDate(item.delivery_date).year}
                                        </span>
                                        <span>
                                            {date.setDate(item.delivery_date).month.name}
                                        </span>
                                        <span>
                                            {date.setDate(item.delivery_date).day}
                                        </span>
                                    </span>

                                    {/* price */}
                                    <span className='flex items-center gap-x-1'>
                                        <span className='text-gray-500'>
                                            Amount
                                        </span>
                                        <span className='font-medium'>
                                            ${item.total_prices_cart}
                                        </span>
                                    </span>

                                    {/* discount */}
                                    <span className='flex items-center gap-x-1'>
                                        <span className='text-gray-500'>
                                            discount
                                        </span>
                                        <span className='font-medium'>
                                            ${item.total_profit}
                                        </span>
                                    </span>

                                    {/* shipping fee */}
                                    <div className='flex items-center gap-x-1'>
                                        <span className='text-gray-500'>
                                            shipping fee
                                        </span>
                                        <span className='font-medium'>
                                            $6
                                        </span>
                                    </div>
                                </div>

                                <Divider />

                                {/* user info */}
                                <div className='py-2 flex flex-col gap-4 text-gray-700 capitalize'>
                                    {/* email */}
                                    <div className='flex items-center gap-x-1'>
                                        <span className='text-gray-500'>
                                            email
                                        </span>
                                        <span className='font-medium normal-case'>
                                            {user.email}
                                        </span>
                                    </div>

                                    {/* address */}
                                    <div className='flex items-center flex-wrap gap-x-1'>
                                        <span className='text-gray-500'>
                                            address
                                        </span>
                                        <p className='font-medium'>
                                            {item.address}
                                        </p>
                                    </div>
                                </div>

                                <Divider />

                                {/* selected products */}
                                <div className="flex flex-wrap gap-12 py-2">
                                    {
                                        item.products.map((product, index) =>
                                            <div key={index * 113} className='relative'>
                                                <Link href={`/product/${product.product.slug}`}>
                                                    {/* image */}
                                                    <div>
                                                        <Image
                                                            alt={product.product.title}
                                                            src={product.product.image}
                                                            width={70}
                                                            height={70}
                                                            className="object-contain"
                                                        />
                                                    </div>

                                                    <div className='absolute -bottom-3 w-full h-4 flex items-center justify-center gap-x-2'>
                                                        {/* size */}
                                                        {
                                                            product.variant.size &&
                                                            <span className=''>
                                                                {product.variant.size}
                                                            </span>
                                                        }

                                                        {/* color */}
                                                        <span className={`${handleColor(product.variant.color)} h-3 w-3 rounded-full`}>
                                                        </span>
                                                    </div>

                                                    {/* count */}
                                                    <span className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center rounded-md bg-gray-200'>
                                                        {product.variant.quantity}
                                                    </span>
                                                </Link>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </ProfileContentContainer>
    )
}

export default OrdersHistory;