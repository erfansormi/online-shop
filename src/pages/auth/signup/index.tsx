import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// authentication
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../../firebase/app';

// formik & yup
import { Formik } from 'formik';
import { SignupSchema } from '../../../components/form/signup/signupValidation';

// redux
import { useSelector } from 'react-redux';
import { State } from '../../../redux/store';

// mui
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

// toatify
import { toastify } from '../../../components/utils/toastify/toastifyFunc';

//signup data
import { signupInputs, SignupInitialValues, signupInitialValues } from '../../../components/form/signup/signupData';

// components
import Input from '../../../components/form/input/input';
import InputError from '../../../components/form/input/inputError';
import Loading from '../../../components/utils/loading/loading';
import FormContainer from '../../../components/form/formContainer/formContainer';
import Image from 'next/image';
import SignupOtherWay from '../../../components/form/signup/signupOtherWay';

const Signup: React.FC = () => {
    const router = useRouter();

    // redux
    const user = useSelector((state: State) => state.auth.user);

    // state
    const [loading, setLoading] = useState(false);

    // if user logedd in, navigate to home
    useEffect(() => {
        if (user != null) {
            router.push("/");
        }
    }, [user, router])

    // handle form submit 
    const handleSubmit = (values: SignupInitialValues) => {
        
    }

    return (
        <FormContainer title='sign up' className='mt-0'>

            {/* default signup */}
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

                        {/* inputs */}
                        <div className='grid grid-cols-2 gap-x-4 w-full'>
                            {signupInputs.slice(0, 2).map((item, index) =>
                                <div key={index * 9} className={`mb-1 w-full h-16`}>
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
                        </div>
                        {signupInputs.slice(2).map((item, index) =>
                            <div key={index * 9} className={`mb-1 w-full h-16`}>
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

                        {/* signup button */}
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
                            <Link href={"/auth/login"} className="text-blue-600">
                                Login
                            </Link>
                        </div>
                    </Box>
                )}
            </Formik>

            {/* other way to sign up */}
            <SignupOtherWay />

            {/* loading */}
            <Loading loading={loading} />
        </FormContainer>
    );
};

export default Signup;