import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// toatify
import { toastify } from '../../../components/utils/toastify/toastifyFunc';

// components
import Loading from '../../../components/utils/loading/loading';
import LoginContainer from '../../../components/form/login/loginContainer';

const Login = () => {
    const router = useRouter();

    // states
    const [loginMethod, setLoginMethod] = useState<"user&pass" | "phone">("user&pass")
    const [loading, setLoading] = useState(false);

    // initialValues
    interface InitialValues {
        user: string,
        password: string,
        phone: string
    }
    const initialValues: InitialValues = {
        user: "",
        password: "",
        phone: ""
    }

    // form submit
    const handleSubmit = (e: InitialValues) => {

    }

    // if user logedd in, navigate to home
    useEffect(() => {

    }, [])

    return (
        <>
            <LoginContainer
                setLoginMethod={setLoginMethod}
                initialValues={initialValues}
                handleSubmit={handleSubmit}
                loginMethod={loginMethod}
            />
            <Loading loading={loading} />
        </>
    )
}

export default Login