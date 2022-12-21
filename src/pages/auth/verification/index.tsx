import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';

// toastify
import { toastify } from '../../../components/utils/toastify/toastifyFunc';

// authentication
import { sendEmailVerification } from "firebase/auth";

// redux
import { useSelector } from 'react-redux';
import { State } from '../../../redux/store';

// mui
import { Button } from '@mui/material';

// components
import Layout from '../../../components/layout/layout';
import Loading from '../../../components/utils/loading/loading';

const Verification = () => {
    const router = useRouter();

    // redux
    const user = useSelector((state: State) => state.auth.user);

    // states
    const [loading, setLoading] = useState(false);

    // is user logedd in?
    useEffect(() => {
        if (user == null || user.emailVerified) {
            router.push("/")
        }
    }, [user, router])

    const handleVerification = () => {
        setLoading(true);
        if (user != null) {
            sendEmailVerification(user)
                .then(() => {
                    toastify("Email verification sent!", "dark", "success")
                })
                .catch((error) => {
                    const errorCode: string = error.code;
                    const message = errorCode.replace("auth/", "").replaceAll("-", " ");
                    toastify(message, "dark", "error")
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }

    return (
        <Layout className='flex justify-center'>
            <div className='rounded-lg shadow-xl p-10 flex flex-col items-center mt-5 max-w-xl'>
                <div className='mb-5 text-gray-900'>
                    <h3>
                        verify your email addres
                    </h3>
                </div>
                <div className='mb-5 text-gray-600 text-justify'>
                    to continue using online shop, please verify your email address
                </div>
                <div className='mb-5 text-gray-900'>
                    {user?.email}
                </div>
                <div>
                    <Button variant="contained" onClick={handleVerification}>
                        send verification email
                    </Button>
                </div>
            </div>
            <Loading loading={loading} />
        </Layout>
    )
}

export default Verification;