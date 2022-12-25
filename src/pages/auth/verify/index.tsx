import React from 'react';
import Image from 'next/image';

// formik & yup
import { Formik } from 'formik';
import * as Yup from 'yup';

// mui
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

// toatify
import { toastify } from '../../../components/utils/toastify/toastifyFunc';

// components
import Input from '../../../components/form/input/input';
import Loading from '../../../components/utils/loading/loading';
import FormContainer from '../../../components/form/formContainer/formContainer';

// validation
const Schema = Yup.object().shape({
    code: Yup.number()
        .integer("Code must be integer!")
        .required("Enter code!")
        .min(10000, "code must be 5 digit!")
        .max(99999, "code must be 5 digit!")
});

interface InitialValues {
    code: string
}

const initialValues: InitialValues = {
    code: ""
}

const VerifyOtp = () => {

    const handleSubmit = (e: InitialValues) => {

    }

    return (
        <>
            <FormContainer title={`verify phone number`} className='relative mt-20 py-20'>
                <div className='flex justify-center absolute -top-28 inset-x-1/2'>
                    <Image
                        className='w-48 h-48 object-contain'
                        src={"/images/verification.png"}
                        alt="verify otp"
                        width={500}
                        height={500}
                        quality={100}
                    />
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={Schema}
                    onSubmit={handleSubmit}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    }) => (
                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"
                            onSubmit={handleSubmit}
                        >
                            <Input
                                placeholder='Enter code'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="code"
                                touched={touched.code}
                                error={errors.code}
                                value={values.code}
                                type="number"
                            />
                            <div className='w-full'>
                                <Button
                                    type="submit"
                                    variant='contained'
                                    className='w-full rounded-md'
                                >
                                    validate one time password
                                </Button>
                            </div>
                        </Box>
                    )}
                </Formik>
            </FormContainer>
        </>
    )
}

export default VerifyOtp