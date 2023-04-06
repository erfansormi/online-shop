import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

// formik & yup
import { Formik } from 'formik';
import * as Yup from 'yup';

// mui
import Box from '@mui/material/Box';

// components
import Input from '../../../components/data_entry/input/input';
import FormContainer from '../../../components/data_entry/formContainer/formContainer';
import SubmitButton from '../../../components/data_entry/submitButton';

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
    const router = useRouter();

    const handleSubmit = (e: InitialValues) => {
        router.push("/profile/personal-info")
    }

    return (
        <>
            <Head>
                <title>Verify OTP</title>
            </Head>
            <FormContainer title={`verify phone number`}
                imageSrc='/images/verification.png'
                imageAlt='verify otp'
            >
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
                                useInForm
                            />

                            {/* button */}
                            <SubmitButton text="validate one time password" />
                        </Box>
                    )}
                </Formik>
            </FormContainer>
        </>
    )
}

export default VerifyOtp