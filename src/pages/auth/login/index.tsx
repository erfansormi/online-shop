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
    const handleSubmit = async (values: LoginInitialValues) => {

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
                        className="w-full flex justify-center items-center flex-col"
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
                        <div className='w-full text-blue-500 text-sm'>
                            <Link href={`#`}>
                                Forget your password?
                            </Link>
                        </div>

                        {/* signup */}
                        <div className="w-full pt-3 mt-8 border-t border-gray-300 border-solid border-x-0 border-b-0">
                            <div className='w-full text-sm'>
                                <span className='text-gray-500 mr-2'>
                                    Do you not have an account?
                                </span>
                                <Link href={"/auth/signup"} className="text-blue-600">
                                    Signup
                                </Link>
                            </div>
                        </div>
                    </Box>
                )}
            </Formik>
            <Loading loading={loading} />
        </FormContainer>
    )
}

export default Login