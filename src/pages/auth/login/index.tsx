import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

// toatify
import { toastify } from '../../../components/utils/toastify/toastifyFunc';

// components
import Loading from '../../../components/utils/loading/loading';
import LoginContainer from '../../../components/form/login/loginContainer';

const Login = () => {
    const router = useRouter();

    // states
    const [loading, setLoading] = useState(false);

    // initialValues
    interface InitialValues {
        email: string,
        password: string,
    }
    const initialValues: InitialValues = {
        email: "",
        password: "",
    }

    // form submit
    const handleSubmit = (e: InitialValues) => {

    }

    // if user logedd in, navigate to home
    useEffect(() => {

    }, [])

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <LoginContainer
                initialValues={initialValues}
                handleSubmit={handleSubmit}
            />
            <Loading loading={loading} />
        </>
    )
}

export default Login