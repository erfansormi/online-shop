import React from 'react'
import Link from 'next/link';

const SwitchToLogin = () => {
    return (
        <div className='w-full pt-3 mt-8 border-t border-gray-300 border-solid border-x-0 border-b-0'>
            <div className='w-full text-sm'>
                <span className='text-gray-500 mr-2'>
                    Already have an account?
                </span>
                <Link href={"/auth/login"} className="text-blue-600">
                    Login
                </Link>
            </div>
        </div>
    )
}

export default SwitchToLogin;