import React from 'react'
import Image from 'next/image'

// mui
import { Button } from '@mui/material'

const SignupOtherWay = () => {
    return (
        <div className='mt-3 flex flex-col'>
            <div>
                <fieldset className='border-r-0 border-l-0 border-b-0 border-solid border-gray-200 text-center'>
                    <legend className='px-4'>
                        <span className='text-gray-500'>Or Signup with</span>
                    </legend>
                </fieldset>
            </div>
            <div className='mt-4'>
                <div className='w-full'>
                    <Button className='rounded-lg w-full' variant='outlined' color='info' size='large'>
                        <div
                            className='absolute left-4 flex'
                        >
                            <Image
                                src={"/images/google.png"}
                                width={30}
                                height={30}
                                alt="google"
                            />
                        </div>
                        <span>
                            Google
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SignupOtherWay