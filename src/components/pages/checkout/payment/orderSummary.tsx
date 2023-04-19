import React, { useState } from 'react';
import { useUserContext } from '../../../../context/userContext';

// checkout store
import useCheckout from '../../../../store/checkout';
import { DateObject } from 'react-multi-date-picker';

// icons
import { TbTruckDelivery } from 'react-icons/tb';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';

// types
import { User } from '../../../../types/user/userTypes';

// components
import ProductsCount from '../../../data_display/productsCount';
import SelectedProducts from '../selectedProducts';

const OrderSummary = () => {
    const { user } = useUserContext();
    const { deliveryDate, deliveryHour } = useCheckout(store => store);
    const date = new DateObject();

    // selected products ref
    const ref: React.LegacyRef<HTMLDivElement> = React.useRef(null);

    // is open product detail?
    const [openDetail, setOpenDetail] = useState(false);

    return (
        <div className='rounded-lg border-gray-200 border-solid border sm:px-5 px-3 pt-5 pb-7'>
            <div className='flex flex-col gap-y-8 text-gray-700'>
                {/* title */}
                <div>
                    <h6 className='font-medium text-lg'>
                        order summary
                    </h6>
                </div>

                {/* selected time */}
                <div className='flex flex-col gap-y-3'>
                    {
                        deliveryDate && deliveryHour ?
                            <div className='sm:text-lg text-base text-gray-700 flex flex-wrap items-center gap-x-2'>
                                <span className='flex sm:text-3xl text-2xl text-red-500'>
                                    <TbTruckDelivery />
                                </span>
                                <p className='font-medium'>
                                    {date.weekDays[+deliveryHour.split("-")[2]].name} {new Date(deliveryDate).getDate()} {new Date(deliveryDate).toDateString().split(" ")[1]} - {deliveryHour.split("-")[0]} to {deliveryHour.split("-")[1]}
                                </p>
                                <ProductsCount products_counts={(user as User).cart.products_counts} />
                            </div> :
                            null
                    }

                    <div>
                        <p className='text-gray-500 text-sm flex flex-wrap items-center gap-x-2'>
                            <span>normal shipping</span>
                            <span>-</span>
                            <span>shipping cost: $6</span>
                        </p>
                    </div>
                </div>

                {/* is true product detail? */}
                <div className='flex justify-end text-gray-500 text-sm capitalize'>
                    <div
                        className='w-fit flex items-center justify-end cursor-pointer'
                        onClick={() => setOpenDetail(!openDetail)}
                    >
                        <span>
                            product detail
                        </span>
                        <span className='flex'>
                            {
                                openDetail ?
                                    <MdOutlineKeyboardArrowUp /> :
                                    <MdOutlineKeyboardArrowDown />
                            }
                        </span>
                    </div>
                </div>

                {/* selected products */}
                <div ref={ref}
                    className={`overflow-hidden transition-[height] duration-500`}
                    style={{ height: openDetail ? ref.current?.scrollHeight : 0 }}
                >
                    <SelectedProducts />
                </div>
            </div>
        </div >
    )
}

export default OrderSummary;