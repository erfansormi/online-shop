import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// formik & yup
import { Formik } from 'formik';
import { LoginSchema } from '../../../components/form/login/loginValidation';

// mui
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

// toatify
import { toastify } from '../../../components/utils/toastify/toastifyFunc';

// redux
import { useSelector } from 'react-redux';
import { State } from '../../../redux/store';

//signup data
import { loginInputs, loginInitialValues, LoginInitialValues } from '../../../components/form/login/loginData';

// components
import Input from '../../../components/form/input/input';
import FormContainer from '../../../components/form/formContainer/formContainer';
import InputError from '../../../components/form/input/inputError';
import Loading from '../../../components/utils/loading/loading';
import SigninOtherWay from '../../../components/form/signinOtherWay';
import FormSwitcher from '../../../components/form/formSwitcher';

const Login = () => {
    const router = useRouter();

    // redux
    const user = useSelector((state: State) => state.auth.user);

    // states
    const [loading, setLoading] = useState(false);

    // if user logedd in, navigate to home
    useEffect(() => {

    }, [])

    // handle form submit 
    const handleSubmit = (values: LoginInitialValues) => {

    }

    return (

        <FormContainer title='login'>
            <Formik
                initialValues={loginInitialValues}
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
                        autoComplete="off"
                        onSubmit={handleSubmit}
                    >
                        {loginInputs.map((item, index) =>
                            <div key={index * 9} className="mb-1 w-full h-16">
                                <Input
                                    placeholder={item.placeholder}
                                    name={item.name}
                                    type={item.type}
                                    value={values[item.name]}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors[item.name]}
                                    touched={touched[item.name]}
                                />
                                {
                                    errors[item.name] && touched[item.name] ?
                                        <InputError error={errors[item.name]} />
                                        : null
                                }
                            </div>
                        )}
                        <div className="mb-3 w-full">
                            <Button
                                type='submit'
                                className="w-full h-10 rounded-md"
                                variant={"contained"}
                            >
                                login
                            </Button>
                        </div>

                        {/* forget password */}
                        <div className='w-full text-blue-500 text-sm cursor-pointer'>
                            <Link href={"/auth/reset-password"}>
                                Forget your password?
                            </Link>
                        </div>

                        {/* other way to login */}
                        <SigninOtherWay
                            buttonText='google'
                            handleClick={() => ""}
                            imageSrc="/images/google.png"
                            title='Or login with'
                        />
                    </Box>
                )}
            </Formik>

            {/* signup */}
            <FormSwitcher type='signup' />

            {/* loading */}
            <Loading loading={loading} />
        </FormContainer>
    )
}

export default Login