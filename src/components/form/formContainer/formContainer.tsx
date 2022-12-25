import Image from 'next/image';
import React from 'react'

// components
import Layout from '../../layout/layout';

// types
interface Props {
    children: React.ReactNode,
    title: string,
    className?: string,
    subTitle?: string,
    titleClassName?: string,
    imageSrc?: string,
    imageAlt?: string
}

const FormContainer = ({ children, title, className, subTitle, titleClassName, imageSrc, imageAlt }: Props) => {
    return (
        <Layout className={`${className ? className : ""} ${imageSrc ? "relative mt-28 py-20" : ""} flex flex-col mt-3 justify-center max-w-xl shadow-md py-6 rounded-xl`}>
            {imageSrc && imageAlt ?
                <div className='flex justify-center absolute -top-28 inset-x-1/2'>
                    <Image
                        className='w-48 h-48 object-contain'
                        src={imageSrc}
                        alt={imageAlt}
                        width={500}
                        height={500}
                        quality={100}
                    />
                </div>
                : null
            }
            <div className={`text-center mb-12 ${titleClassName ? titleClassName : ""}`}>
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
        </Layout>
    )
}

export default FormContainer