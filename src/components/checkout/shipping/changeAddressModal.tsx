import React from 'react'

// data
import { addressItems } from '../../profile/pages/addresses/registeredAddresses'

// icons
import { IoIosArrowForward } from 'react-icons/io';

// context
import { useUserContext } from '../../../context/userContext';

// zustand stores
import useAddressValues from '../../../store/userAddress';
import useCheckout from '../../../store/checkout';

// components
import CustomizedModal from '../../utils/modal/customizedModal'
import { Divider, FormControlLabel, Radio, RadioGroup } from '@mui/material';

const ChangeAddressModal = () => {
    const { user } = useUserContext();

    const { deliveryAddressModal, setDeliveryAddressModal, setSelectedAddressId, selectedAddressId } = useCheckout(state => state);
    const { map } = useAddressValues(state => state);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedAddressId(event.target.value);
    };

    return (
        <CustomizedModal
            maxWidth="sm"
            title='choose address'
            open={deliveryAddressModal}
            handleClose={() => setDeliveryAddressModal(false)}
        >
            {/* register new address */}
            <div
                className='flex items-center justify-between pl-1 pr-2 cursor-pointer pb-6 pt-2'
                onClick={() => {
                    setDeliveryAddressModal(false)
                    map.setModal(true)
                }}
            >
                <span className='text-gray-700 capitalize text-base font-medium'>
                    register new address
                </span>
                <span className='flex'>
                    <IoIosArrowForward />
                </span>
            </div>
            <Divider />

            {/* user addresses */}
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={selectedAddressId}
                onChange={handleChange}
            >
                {
                    user && user.addresses.length ?
                        user.addresses.map((address, index) =>
                            <div
                                key={index * 88}
                                className='flex flex-col gap-y-3 py-2  border-b-gray-200'
                            >
                                {/* input radio */}
                                <FormControlLabel
                                    value={address._id}
                                    control={<Radio color='info' />}
                                    label={address.postal_address}
                                />

                                {/* other info */}
                                <div className='flex justify-between'>
                                    <div className='flex flex-col gap-y-2 text-gray-500 text-sm'>
                                        {
                                            addressItems(address, user).map((item, index) =>
                                                <span className='flex items-center gap-x-2 leading-6' key={index * 90}>
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
                                </div>
                            </div>
                        ) :
                        null
                }
            </RadioGroup>
        </CustomizedModal>
    )
}

export default ChangeAddressModal;