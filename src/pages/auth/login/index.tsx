import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import axios from "axios";

// toatify
import { toastify } from '../../../components/utils/toastify/toastifyFunc';

// components
import Loading from '../../../components/utils/loading/loading';
import LoginContainer from '../../../components/form/login/loginContainer';

// user context
import { useUserContext } from '../../../context/userContext';

// nookie lib
import { setCookie } from 'nookies';

// axios
import { axiosInstance } from '../../../functions/axiosInstance';

const Login = () => {
    const router = useRouter();

    // token context
    const { token, setToken } = useUserContext();

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
    const handleSubmit = async (e: InitialValues) => {
        setLoading(true);

        try {
            // post data
            await axiosInstance.post('/api/v1/users/login', {
                email: e.email,
                password: e.password
            })
                .then((res) => {
                    setLoading(false);
                    // setCookie(null, "token", res.data.token, {
                    //     maxAge: 30 * 24 * 60 * 60,
                    // })
                    setToken(res.data.token);
                    toastify(res.data.message, "light", "success");
                    router.push("/");
                })
                .finally(() => {
                    setLoading(false);
                })
        }
        catch (err: any) {
            toastify(err.response.data.message, "light", "error");
        }
    }

    // if user logged in, navigate to home
    useEffect(() => {
        if (token) {
            router.push("/")
        }
    }, [token])

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