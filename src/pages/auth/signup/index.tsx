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

// user context
import { useUserContext } from '../../../context/userContext';

const Signup: React.FC = () => {
    const router = useRouter();

    // token context
    const { user, setUser } = useUserContext();

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

        // post data
        await axiosInstance.post("/api/v1/users/signup", {
            first_name: e.firstName,
            last_name: e.lastName,
            email: e.email,
            password: e.password
        })
            .then((res) => {
                setLoading(false);
                setUser(res.data);
                toastify(res.data.message, "light", "success");
                router.push("/");
            })
            .catch(err => {
                toastify(err.response.data.message, "light", "error");
            })
            .finally(() => {
                setLoading(false);
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
                <title>Signup</title>
            </Head>
            <SignupContainer
                handleSubmit={handleSubmit}
                initialValues={signupInitialValues}
            />
            <Loading loading={loading} />
        </>
    );
};

export default Signup;