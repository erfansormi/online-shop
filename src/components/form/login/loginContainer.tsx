import React from 'react';

// formik & yup
import { Formik } from 'formik';
import { LoginSchema } from '../login/loginValidation';

// mui
import Box from '@mui/material/Box';

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
    email: string,
    password: string,
}

interface Props {
    handleSubmit: (e: InitialValues) => void,
    initialValues: InitialValues,
}

const LoginContainer = ({ handleSubmit, initialValues }: Props) => {
    return (
        <FormContainer
            title={`login`}
            titleClassName='mb-10'
        >
            <Formik
                initialValues={initialValues}
                validationSchema={LoginSchema}
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
                        onSubmit={handleSubmit}
                    >
                        {
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
                                    useInForm
                                />
                            )
                        }

                        {/* submit login */}
                        <SubmitButton text='login' />

                        {/* forget password */}
                        {/* <div className='w-full text-blue-500 text-sm cursor-pointer'>
                            <Link href={"/auth/reset-password"}>
                                Forget your password?
                            </Link>
                        </div> */}

                        {/* other way to login */}
                        <SigninOtherWay
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