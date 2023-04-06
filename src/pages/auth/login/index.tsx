import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

// toatify
import { toastify } from '../../../components/utils/toastify/toastifyFunc';

// components
import LoginContainer from '../../../components/data_entry/login/loginContainer';

// contexts hooks
import { useUserContext } from '../../../context/userContext';
import { useGeneralContext } from '../../../context/generalContext';

// axios
import { axiosInstance } from '../../../functions/axiosInstance';

const Login = () => {
    const router = useRouter();

    // contexts
    const { user, setUser } = useUserContext();
    const { general, setGeneral } = useGeneralContext();

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
        setGeneral({
            ...general,
            loading: true
        })

        // post data
        await axiosInstance.post('/api/v1/users/login', {
            email: e.email,
            password: e.password
        })
            .then((res) => {
                toastify(res.data.message, "success");
                setUser(res.data.user);
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
                <title>Online Shop | Login</title>
            </Head>
            <LoginContainer
                initialValues={initialValues}
                handleSubmit={handleSubmit}
            />
        </>
    )
}

export default Login