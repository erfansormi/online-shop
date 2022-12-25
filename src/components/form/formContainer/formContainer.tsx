import React from 'react'

// components
import Layout from '../../layout/layout';

// types
interface Props {
    children: React.ReactNode,
    title: string,
    className?: string,
    subTitle?: string,
    titleClassName?: string
}

const FormContainer = ({ children, title, className, subTitle, titleClassName }: Props) => {
    return (
        <Layout className={`${className ? className : ""} flex flex-col mt-3 justify-center px-8 max-w-xl shadow-md py-6 rounded-xl`}>
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