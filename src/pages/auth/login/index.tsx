import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

// toatify
import { toastify } from '../../../components/utils/toastify/toastifyFunc';

// components
import Loading from '../../../components/utils/loading/loading';
import LoginContainer from '../../../components/form/login/loginContainer';

// user context
import { useUserContext } from '../../../context/userContext';

// axios
import { axiosInstance } from '../../../functions/axiosInstance';

const Login = () => {
    const router = useRouter();

    // user context
    const { user, setUser } = useUserContext();

    // loading state
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

        // post data
        await axiosInstance.post('/api/v1/users/login', {
            email: e.email,
            password: e.password
        })
            .then((res) => {
                setLoading(false);
                toastify(res.data.message, "light", "success");
                setUser(res.data);
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