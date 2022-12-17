import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// authentication
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../firebase/app';

// formik & yup
import { Formik } from 'formik';
import { LoginSchema } from '../../../components/form/login/loginValidation';

// mui
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

// toatify
import { toastify } from '../../../components/utils/toastify/toastifyFunc';

//signup data
import { loginInputs, loginInitialValues, LoginInitialValues } from '../../../components/form/login/loginData';

// components
import Input from '../../../components/form/input/input';
import Layout from '../../../components/layout/layout';
import InputError from '../../../components/form/input/inputError';
import Loading from '../../../components/utils/loading/loading';


const Login = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter();

    // handle form submit 
    const handleSubmit = (values: LoginInitialValues) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);

                // alert 
                toastify("Welcome back to your account!", "dark", "success")
                router.push("/")
            })
            .catch((error) => {
                const errorCode: string = error.code;
                const message = errorCode.replace("auth/", "").replaceAll("-", " ");

                // alert
                toastify(message, "dark", "error")
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <Layout className='flex flex-col justify-center px-10 max-w-xl shadow-xl py-8 rounded-xl'>
            <div className='text-center mb-5'>
                <h2>
                    login
                </h2>
            </div>
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
                        <div className='w-full text-sm'>
                            <span className='text-gray-500 mr-2'>
                                Do you not have an account?
                            </span>
                            <Link href={"/auth/signup"} className="text-blue-600">
                                signup
                            </Link>
                        </div>
                    </Box>
                )}
            </Formik>
            <Loading loading={loading} />
        </Layout>
    )
}

export default Login