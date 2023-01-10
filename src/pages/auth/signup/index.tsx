import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

// components
import SignupContainer from '../../../components/form/signup/signupContainer';
import Loading from '../../../components/utils/loading/loading';

const Signup: React.FC = () => {
    const router = useRouter();

    // states
    const [signupMethod, setSignupMethod] = useState<"email" | "phone">("phone")
    const [loading, setLoading] = useState(false);

    // initialValues
    interface InitialValues {
        phone: string,
        email: string
    }
    const initialValues = {
        phone: "",
        email: ""
    }

    // form submit
    const handleSubmit = (e: InitialValues) => {
        router.push("/auth/verify")
    }

    // if user logedd in, navigate to home
    useEffect(() => {

    }, [])

    return (
        <>
            <Head>
                <title>Signup</title>
            </Head>
            <SignupContainer
                handleSubmit={handleSubmit}
                initialValues={initialValues}
                signupMethod={signupMethod}
                setSignupMethod={setSignupMethod}
            />
            <Loading loading={loading} />
        </ >
    );
};

export default Signup;