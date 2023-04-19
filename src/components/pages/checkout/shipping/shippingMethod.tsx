import React from 'react';
import { useUserContext } from '../../../../context/userContext';

// icons
import { TbTruckDelivery } from 'react-icons/tb';

// types
import { User } from '../../../../types/user/userTypes';

// components
import ProductsCount from '../../../data_display/productsCount';

const ShippingMethod = () => {
    const { user } = useUserContext();

    return (
        <div className='flex capitalize leading-5 gap-x-1 items-center'>
            <span className='flex text-red-500 text-4xl mt-1'>
                <TbTruckDelivery />
            </span>

            <div className='flex flex-col'>
                <div className='flex items-center gap-x-1'>
                    <span className='font-medium'>
                        normal shipping
                    </span>
                    <ProductsCount products_counts={(user as User).cart.products_counts} />
                </div>

                <span className='text-gray-500 text-xs'>
                    available in stock
                </span>
            </div>
        </div>
    )
}

export default ShippingMethod;