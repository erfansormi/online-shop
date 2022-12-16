import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// authentication
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../firebase/app';

// formik & yup
import { Formik } from 'formik';
import { SignupSchema } from '../../components/form/signup/signupValidation';

// mui
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

// toatify
import { toastify } from '../../components/utils/toastify/toastifyFunc';

//signup data
import { signupInputs, SignupInitialValues, signupInitialValues } from '../../components/form/signup/signupData';

// components
import Input from '../../components/form/input';
import Layout from '../../components/layout/layout';
import InputError from '../../components/form/inputError';
import Loading from '../../components/utils/loading/loading';


const Signup: React.FC = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter();

    // handle form submit 
    const handleSubmit = (values: SignupInitialValues) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: `${values.firstName} ${values.lastName}`
                })

                // alert 
                toastify("Signup successfuly!", "dark", "success")

                // verification
                router.push("/account/verification");
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
                    sign up
                </h2>
            </div>
            <Formik
                initialValues={signupInitialValues}
                validationSchema={SignupSchema}
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
                        {signupInputs.map((item, index) =>
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
                                sign up
                            </Button>
                        </div>
                        <div className='w-full text-sm'>
                            <span className='text-gray-500 mr-2'>
                                Already have an account?
                            </span>
                            <Link href={"/login"} className="text-blue-600">
                                Login
                            </Link>
                        </div>
                    </Box>
                )}
            </Formik>
            <Loading loading={loading} />
        </Layout>
    );
};

export default Signup;