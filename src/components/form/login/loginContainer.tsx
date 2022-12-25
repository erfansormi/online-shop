import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// formik & yup
import { Formik } from 'formik';
import { LoginSchema, PhoneLoginSchema } from '../login/loginValidation';

// mui
import Box from '@mui/material/Box';

// icons
import { AiOutlinePhone, AiOutlineUser } from 'react-icons/ai';

//signup data
import { loginInputs } from '../login/loginData';

// components
import Input from '../input/input';
import FormContainer from '../formContainer/formContainer';
import SigninOtherWay from '../signinOtherWay';
import FormSwitcher from '../formSwitcher';
import SubmitButton from '../submitButton';

// types
interface InitialValues {
    user: string,
    password: string,
    phone: string
}

interface Props {
    setLoginMethod: React.Dispatch<React.SetStateAction<"user&pass" | "phone">>,
    handleSubmit: (e: InitialValues) => void,
    initialValues: InitialValues,
    loginMethod: "user&pass" | "phone"
}

const LoginContainer = ({ setLoginMethod, handleSubmit, initialValues, loginMethod }: Props) => {

    // if user logedd in, navigate to home
    useEffect(() => {

    }, [])

    return (
        <FormContainer
            title={`login`}
            subTitle={`with ${loginMethod == "phone" ? "phone number" : "username & password"}`}
            titleClassName='mb-6'
        >
            <Formik
                initialValues={initialValues}
                validationSchema={loginMethod == "user&pass" ? LoginSchema : PhoneLoginSchema}
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
                        {
                            loginMethod == "user&pass" ?
                                loginInputs.map((item, index) =>
                                    <Input
                                        key={index * 9}
                                        placeholder={item.placeholder}
                                        name={item.name}
                                        type={item.type}
                                        value={values[item.name]}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={errors[item.name]}
                                        touched={touched[item.name]}
                                    />
                                ) :
                                <Input
                                    placeholder={"Enter phone number"}
                                    name={"phone"}
                                    type={"text"}
                                    value={values.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.phone}
                                    touched={touched.phone}
                                />
                        }

                        {/* submit login */}
                        <SubmitButton text='login' />

                        {/* forget password */}
                        <div className='w-full text-blue-500 text-sm cursor-pointer'>
                            <Link href={"/auth/reset-password"}>
                                Forget your password?
                            </Link>
                        </div>

                        {/* other way to login */}
                        <SigninOtherWay
                            buttonText={loginMethod == "phone" ? "username and password" : "phone number"}
                            handleClick={() => setLoginMethod(loginMethod == "user&pass" ? "phone" : "user&pass")}
                            Icon={loginMethod == "user&pass" ? <AiOutlinePhone /> : <AiOutlineUser />}
                            title='Or login with'
                        />
                        <SigninOtherWay
                            noTitle
                            buttonText='google'
                            handleClick={() => ""}
                            imageSrc="/images/google.png"
                        />
                    </Box>
                )}
            </Formik>

            {/* switch to signup */}
            <FormSwitcher type='signup' />

        </FormContainer>
    )
}

export default LoginContainer;