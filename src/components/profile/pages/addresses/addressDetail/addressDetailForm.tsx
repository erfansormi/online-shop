import React from 'react'

// data
import { addressInputs } from './addressDetailData';

// icons
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

// types
import { FormikProps } from 'formik';
import type { AddressDetailValues } from "../../../../../store/userAddress";

// zustand store
import useAddressValues from '../../../../../store/userAddress';

// components
import Input from '../../../../data_entry/input/input';
import Label from '../../../../data_display/label';
import { Button, Divider } from '@mui/material';
import InputError from '../../../../data_entry/input/inputError';
import TextArea from '../../../../data_entry/input/textArea';

const AddressDetailForm = ({ values, handleSubmit, handleBlur, handleChange, errors, touched, isSubmitting }: FormikProps<AddressDetailValues>) => {
    const { addressDetail, map } = useAddressValues(state => state)

    return (
        <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-y-6'
        >
            {/* postal address */}
            <div className='flex flex-col gap-y-2'>
                <Label
                    label={"postal address"}
                    required
                />
                <TextArea
                    name="postal_address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.postal_address}
                />
                {
                    errors.postal_address && touched.postal_address &&
                    <div>
                        <InputError error={errors.postal_address} noMargin />
                    </div>
                }

                <p className='text-sm text-gray-500'>
                    the address above is entered based on your selected location.
                </p>
            </div>

            {/* open map */}
            <span
                className='text-cyan-500 flex items-center leading-4 text-base cursor-pointer hover:text-cyan-600 transition-colors duration-300'
                onClick={() => {
                    addressDetail.setModal(false);
                    map.setModal(true);
                }}
            >
                edit location coordinates on the map
                <span className='flex text-xl mt-0.5'>
                    <MdOutlineKeyboardArrowRight />
                </span>
            </span>

            <Divider />

            {/* other inputs */}
            <div className='flex flex-wrap justify-between gap-y-4'>
                {
                    addressInputs.map((item, index) =>
                        <div
                            key={index * 84}
                            className=""
                            style={{ width: `${item.width}%` }}
                        >
                            <div className='flex flex-col gap-y-2'>
                                <Label
                                    label={item.label}
                                    required={item.required}
                                />
                                <Input
                                    type="text"
                                    name={item.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values[item.name]}
                                />
                            </div>
                            {
                                errors[item.name] && touched[item.name] &&
                                <div>
                                    <InputError error={errors[item.name]} noMargin />
                                </div>
                            }
                        </div>
                    )
                }
            </div>

            <Divider />

            <div>
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant='contained'
                    fullWidth
                >
                    register address
                </Button>
            </div>
        </form>
    )
}

export default AddressDetailForm;