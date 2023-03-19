import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import axios from 'axios';

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

// context
import { useUserContext } from '../../../context/userContext';

const Signup: React.FC = () => {
    const router = useRouter();

    // user context
    const { user, setUser } = useUserContext();
    console.log(user);

    // states
    const [loading, setLoading] = useState(false);

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
        setLoading(true);

        try {
            // post data
            await axios.post(`${process.env.URL as string}/api/v1/users/signup`, {
                first_name: e.firstName,
                last_name: e.lastName,
                email: e.email,
                password: e.password
            })
                .then((res) => {
                    setLoading(false);
                    toastify(res.data.message, "light", "success");
                    router.push("/");
                })

            await axios.get(`${process.env.URL}/api/v1/users/me`)
                .then(res => {
                    setUser(res.data)
                })
        }
        catch (err: any) {
            toastify(err.response.data.message, "light", "error");
        }
    }

    // if user logedd in, navigate to home
    // useEffect(() => {
    //     if (!!user) {
    //         router.push("/");
    //     }
    // }, [user])

    return (
        <>
            <Head>
                <title>Signup</title>
            </Head>
            <SignupContainer
                handleSubmit={handleSubmit}
                initialValues={signupInitialValues}
            />
            <Loading loading={loading} />
        </ >
    );
};

export default Signup;