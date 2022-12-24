import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// redux
import { useSelector } from 'react-redux';
import { State } from '../../../redux/store';

// components
import SignupWithPhone from '../../../components/form/signup/signupWithPhone';
import SignupWithEmail from '../../../components/form/signup/signupWithEmail';

const Signup: React.FC = () => {
    const router = useRouter();

    // redux
    const user = useSelector((state: State) => state.auth.user);

    // states
    const [signupMethod, setSignupMethod] = useState<"email" | "phone">("phone")

    // if user logedd in, navigate to home
    useEffect(() => {

    }, [])

    return (
        <>
            {
                signupMethod == "phone" ?
                    <SignupWithPhone setSignupMethod={setSignupMethod} /> :
                    <SignupWithEmail setSignupMethod={setSignupMethod} />
            }
        </ >
    );
};

export default Signup;