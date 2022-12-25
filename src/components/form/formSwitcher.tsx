import React from 'react'
import Link from 'next/link';

interface Props {
    type: "signup" | "login"
}

const FormSwitcher = ({ type }: Props) => {
    return (
        <div className='w-full pt-3 mt-8 border-t border-gray-300 border-solid border-x-0 border-b-0'>
            <div className='w-full text-sm'>
                <span className='text-gray-500 mr-2'>
                    {
                        type == "login" ?
                            "Already have an account?"
                            :
                            "Don't have an account?"
                    }
                </span>
                <Link href={type == "login" ? "/auth/login" : "/auth/signup"} className="text-blue-600">
                    {type == "login" ? "Login" : "Signup"}
                </Link>
            </div>
        </div>
    )
}

export default FormSwitcher;