import React from 'react'

// css
import styles from "./input.module.css";

// components
import InputError from './inputError';

// ts
interface IProps {
    error?: string | undefined,
    touched?: boolean | undefined,
}

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input = ({ error, touched, className, ...props }: Props & IProps) => {
    return (
        <div className={`mb-1 w-full h-16`}>
            <input
                className={`${className ? className : ""} ${styles.input} w-full normal-case h-10 p-3 bg-gray-200 rounded-full focus:outline-gray-400 focus:outline focus:outline-2 ${error && touched ? "outline-2 outline outline-red-500" : ""}`}
                spellCheck={false}
                {...props}
            />
            {
                error && touched ?
                    <InputError error={error} />
                    : null
            }
        </div>
    )
}

export default Input;