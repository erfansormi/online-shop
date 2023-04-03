import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

// axios
import { axiosInstance } from '../../../functions/axiosInstance';

// components
import SignupContainer from '../../../components/form/signup/signupContainer';
import Loading from '../../../components/utils/loading/loading';

// toast
import { toastify } from '../../../components/utils/toastify/toastifyFunc';

// types
export interface SignupInitialValues {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
}
export type signupKeys = keyof SignupInitialValues;

// contexts hooks
import { useUserContext } from '../../../context/userContext';
import { useGeneralContext } from '../../../context/generalContext';

const Signup: React.FC = () => {
    const router = useRouter();

    // contexts
    const { user, setUser } = useUserContext();
    const { general, setGeneral } = useGeneralContext();

    // signup initial values
    const signupInitialValues: SignupInitialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    }

    // form submit
    const handleSubmit = async (e: SignupInitialValues) => {
        setGeneral({
            ...general,
            loading: true
        })

        // post data
        await axiosInstance.post("/api/v1/users/signup", {
            first_name: e.firstName,
            last_name: e.lastName,
            email: e.email,
            password: e.password
        })
            .then((res) => {
                setUser(res.data.user);
                toastify(res.data.message, "success");
                router.push("/");
            })
            .catch(err => {
                toastify(err.response.data.message, "error");
            })
            .finally(() => {
                setGeneral({
                    ...general,
                    loading: false
                })
            })
    }

    // if user logged in, navigate to home
    useEffect(() => {
        if (user !== null) {
            router.push("/");
        }
    }, [user])

    return (
        <>
            <Head>
                <title>Online Shop | Signup</title>
            </Head>
            <SignupContainer
                handleSubmit={handleSubmit}
                initialValues={signupInitialValues}
            />
        </>
    );
};

export default Signup;