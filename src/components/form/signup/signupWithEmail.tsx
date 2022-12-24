import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// formik & yup
import { Formik } from 'formik';
import { SignupSchema } from '../../form/signup/signupValidation';

// redux
import { useSelector } from 'react-redux';
import { State } from '../../../redux/store';

// icons
import { AiOutlinePhone } from 'react-icons/ai';

// mui
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

// toatify
import { toastify } from '../../utils/toastify/toastifyFunc';

// components
import Input from '../input/input';
import Loading from '../../utils/loading/loading';
import FormContainer from '../formContainer/formContainer';
import SwitchToLogin from './switchToLogin';
import SigninOtherWay from './signinOtherWay';

// types
interface Props {
    setSignupMethod: React.Dispatch<React.SetStateAction<"email" | "phone">>
}

interface InitialValues {
    email: string
}

const initialValues: InitialValues = {
    email: ""
}

const SignupWithEmail = ({ setSignupMethod }: Props) => {
    const router = useRouter();

    // redux
    const user = useSelector((state: State) => state.auth.user);

    // state
    const [loading, setLoading] = useState(false);

    // if user logedd in, navigate to home
    useEffect(() => {

    }, [])

    // handle form submit 
    const handleSubmit = (values: InitialValues) => {

    }

    return (
        <FormContainer title='sign up with email' className='mt-0'>

            {/* default signup */}
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
                }) => (
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit}
                        className="w-full flex justify-center items-center flex-col"
                    >

                        {/* input */}
                        <div className='w-full'>
                            <Input
                                placeholder={"Enter your email"}
                                name={"email"}
                                type={"text"}
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.email}
                                touched={touched.email}
                            />
                        </div>

                        {/* signup button */}
                        <div className="mb-3 w-full">
                            <Button
                                type='submit'
                                className="w-full h-10 rounded-md"
                                variant={"contained"}
                            >
                                next
                            </Button>
                        </div>
                    </Box>
                )}
            </Formik>

            {/* switch to login */}
            <SwitchToLogin />

            {/* signup to other way */}
            <SigninOtherWay
                title='Or signup with'
                buttonText='phone number'
                Icon={<AiOutlinePhone />}
                handleClick={() => setSignupMethod("phone")}
            />

            {/* loading */}
            <Loading loading={loading} />
        </FormContainer>
    );
};

export default SignupWithEmail;