import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// authentication
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import { auth } from '../../firebase/app';

// formik & yup
import { Formik } from 'formik';
import { SignupSchema } from '../../components/form/signupData/signupValidation';

// mui
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

// data
import { signupData } from '../../components/form/signupData/signupData';

// components
import Input from '../../components/form/input';
import Layout from '../../components/layout/layout';
import InputError from '../../components/form/inputError';

// ts
interface SignupInitialValues {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
}

const initialValues: SignupInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

export type SignupKeys = keyof SignupInitialValues;

const Signup: React.FC = () => {

    // handle signup form submit 
    const handleSubmit = (values: SignupInitialValues) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: `${values.firstName} ${values.lastName}`
                })

                // verification
                sendEmailVerification(user);
                auth.signOut();
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });
    }

    return (
        <Layout className='flex flex-col justify-center px-11 sm:px-40 md:px-60'>
            <div className='text-center mb-5'>
                <h2>
                    sign up
                </h2>
            </div>
            <Formik
                initialValues={initialValues}
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
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        className="w-full flex justify-center items-center flex-col"
                        onSubmit={handleSubmit}
                    >
                        {signupData.map((item, index) =>
                            <div key={index * 9} className="mb-1 w-full h-16 lg:w-1/2">
                                <Input
                                    placeholder={item.placeholder}
                                    name={item.name}
                                    type={item.type}
                                    value={values[item.name]}
                                    onChange={handleChange}
                                    onBlur={handleBlur}

                                />
                                {
                                    errors[item.name] && touched[item.name] ?
                                        <InputError error={errors[item.name]} />
                                        : null
                                }
                            </div>
                        )}
                        <div className="mb-3 w-full lg:w-1/2">
                            <Button
                                // disabled={isSubmitting}
                                type='submit'
                                className="w-full h-10 rounded-3xl"
                                variant={"contained"}
                            >
                                sign up
                            </Button>
                        </div>
                        <div className='w-full lg:w-1/2 text-sm'>
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
        </Layout>
    );
};

export default Signup;