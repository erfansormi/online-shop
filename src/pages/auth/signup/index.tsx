import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// components
import SignupContainer from '../../../components/form/signup/signupContainer';

const Signup: React.FC = () => {
    // signup state
    const [signupMethod, setSignupMethod] = useState<"email" | "phone">("phone")

    // if user logedd in, navigate to home
    useEffect(() => {

    }, [])

    return (
        <>
            {
                signupMethod == "phone" ?
                    <SignupContainer
                        name={"phone"}
                        setSignupMethod={setSignupMethod}
                    /> :
                    <SignupContainer
                        name={"email"}
                        setSignupMethod={setSignupMethod}
                    />
            }
        </ >
    );
};

export default Signup;