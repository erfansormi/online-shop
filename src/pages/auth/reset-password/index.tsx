import React from 'react'
import Head from 'next/head';
import Link from 'next/link';

// formik & yup
import { Formik } from 'formik'
import * as Yup from 'yup';

// mui
import { Button, Box } from '@mui/material'

// components
import FormContainer from '../../../components/form/formContainer/formContainer';
import Input from '../../../components/form/input/input';
import InputError from '../../../components/form/input/inputError';
import SubmitButton from '../../../components/form/submitButton';

// validation
const Schema = Yup.object().shape({
    user: Yup.string()
        .min(5, "To short!")
        .required('Email, phone number or username is required!'),
});

const RestPassword = () => {
    // types
    interface InitialValues {
        user: string
    }
    const initialValues: InitialValues = {
        user: ""
    }

    // handle form submit 
    const handleSubmit = (values: InitialValues) => {

    }

    return (
        <>
            <Head>
                <title>Forget Password</title>
            </Head>
            <FormContainer
                title='forget password'
                imageSrc='/images/forget-password.png'
                imageAlt='forget password'
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
                                placeholder={"Enter your email or phone number"}
                                name={"user"}
                                type={"text"}
                                value={values.user}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.user}
                                touched={touched.user}
                                useInForm
                            />

                            {/*submit button */}
                            <SubmitButton text='next' />

                            {/* login */}
                            <div className='w-full text-blue-500 text-sm cursor-pointer'>
                                <Link href={"/auth/login"}>
                                    login to your account
                                </Link>
                            </div>

                        </Box>
                    )}
                </Formik>
                {/* <Loading loading={loading} /> */}
            </FormContainer>
        </>
    )
}

export default RestPassword