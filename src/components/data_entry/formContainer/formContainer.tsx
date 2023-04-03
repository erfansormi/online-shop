import Image from 'next/image';
import React from 'react'

// types
interface Props {
    children: React.ReactNode,
    title: string,
    subTitle?: string,
    titleClassName?: string,
    imageSrc?: string,
    imageAlt?: string
}

const FormContainer = ({ children, title, subTitle, titleClassName, imageSrc, imageAlt }: Props) => {
    return (
        <>
            <div
                className={`w-full flex justify-center ${imageSrc && imageAlt ? "mt-40" : ""} sm:items-center px-3 my-14`}
            >
                <div className={`h-fit relative px-4 py-6 flex flex-col justify-center max-w-xl shadow-md rounded-xl w-full`}>

                    {/* handle image */}
                    {imageSrc && imageAlt ?
                        <div className='flex justify-center absolute -top-28 inset-x-1/2 drop-shadow-[0_0px_1px_rgba(0,0,0,0.25)]'>
                            <Image
                                className='w-48 h-48 object-contain rounded-md'
                                src={imageSrc}
                                alt={imageAlt}
                                width={500}
                                height={500}
                                quality={100}
                            />
                        </div>
                        : null
                    }

                    {/* title */}
                    <div className={`text-center mb-12 ${titleClassName ? titleClassName : ""} ${imageSrc && imageAlt ? "mt-16" : ""}`}>
                        <h2 className='text-gray-800'>
                            {title}
                        </h2>
                        {
                            subTitle ?
                                <div className='text-gray-400 text-sm mt-2'>
                                    <span>
                                        {subTitle}
                                    </span>
                                </div>
                                : null
                        }
                    </div>

                    {children}
                </div>
            </div>
        </>
    )
}

export default FormContainer