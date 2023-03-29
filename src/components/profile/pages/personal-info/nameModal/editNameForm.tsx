import React from 'react';

// components
import Input from '../../../../form/input/input';
import Label from '../../../../data_display/label';
import { Button } from '@mui/material';
import InputError from '../../../../form/input/inputError';

// types
import type { FormikProps } from 'formik';
import { InitialValues } from './nameModalContainer';

// user context
import { useUserContext } from '../../../../../context/userContext';

const EditNameForm = ({ values, touched, handleSubmit, handleBlur, handleChange, errors }: FormikProps<InitialValues>) => {
    const { user } = useUserContext();

    return (
        <form className='flex flex-col gap-y-6' onSubmit={handleSubmit}>
            <div>
                <p className='text-gray-700 text-base'>
                    please enter your identification information. your first and last name must match the information you enter.
                </p>
            </div>

            {/* inputs */}
            <div className='flex item-center justify-between gap-x-8'>
                <div className='w-full flex flex-col gap-y-1'>
                    <Label label='name' required />
                    <Input
                        name='firstName'
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.firstName && touched.firstName ? <InputError error={errors.firstName} noMargin /> : null}
                </div>

                <div className='w-full flex flex-col gap-y-1'>
                    <Label label='surname' required />
                    <Input
                        name='lastName'
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.lastName && touched.lastName ? <InputError error={errors.lastName} noMargin /> : null}
                </div>
            </div>

            {/* submit button */}
            <div className='flex justify-end'>
                <Button
                    variant="contained"
                    type="submit"
                    disabled={user?.first_name === values.firstName && user?.last_name === values.lastName}
                >
                    submit
                </Button>
            </div>
        </form>
    )
}

export default EditNameForm;