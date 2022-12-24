import React from 'react'

// components
import Layout from '../../layout/layout';

// types
interface Props {
    children: React.ReactNode,
    title: string,
    className?: string
}

const FormContainer = ({ children, title, className }: Props) => {
    return (
        <Layout className={`${className ? className : ""} flex flex-col mt-3 justify-center px-8 max-w-xl shadow-md py-6 rounded-xl`}>
            <div className='text-center mb-8'>
                <h2 className='text-gray-800'>
                    {title}
                </h2>
            </div>
            {children}
        </Layout>
    )
}

export default FormContainer