import React from 'react'
import Image from 'next/image'

// mui
import { Button } from '@mui/material'

// types
interface Props {
    title?: string,
    imageSrc?: string,
    buttonText: string,
    handleClick: () => any,
    Icon?: any,
}

const SigninOtherWay = ({ title, imageSrc, buttonText, handleClick, Icon }: Props) => {
    return (
        <div className={`${!title ? "" : "mt-6"} flex flex-col w-full`}>
            {
                !title ?
                    null :
                    <div>
                        <fieldset className='border-r-0 border-t border-l-0 border-b-0 border-solid border-gray-300 text-center'>
                            <legend className='px-4'>
                                <span className='text-gray-500'>{title}</span>
                            </legend>
                        </fieldset>
                    </div>
            }
            <div className='mt-4'>
                <div className='w-full'>
                    <Button onClick={handleClick} className='rounded-md w-full' variant='outlined' color='info' size='large'>
                        <div
                            className='absolute left-4 flex text-3xl'
                        >
                            {
                                imageSrc ?
                                    <Image
                                        src={imageSrc}
                                        width={30}
                                        height={30}
                                        alt={buttonText}
                                    /> :
                                    Icon ?
                                        [Icon]
                                        : null
                            }
                        </div>
                        <span>
                            {buttonText}
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SigninOtherWay;