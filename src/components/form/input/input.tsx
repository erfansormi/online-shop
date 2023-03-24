import React from 'react'

// css
import styles from "./input.module.css";

// components
import InputError from './inputError';

// ts
interface IProps {
    height?: "large" | "medium",
    error?: string,
    touched?: boolean,
    useInForm?: boolean,
}

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input = ({ height, error, touched, className, useInForm, ...props }: Props & IProps) => {
    const sizesClasses = () => {
        if (height == "large") {
            return "h-[50px]"
        }
        return "h-10"
    }

    const errorClasses = () => {
        if (error && touched) {
            return "outline-2 outline outline-red-500"
        }
    }

    return (
        <div className={`w-full ${useInForm ? "h-16 mb-1" : "h-full"}`}>
            <input
                className={`${className ? className : ""} ${styles.input} w-full text-sm normal-case rounded-md  ${sizesClasses()} p-3 bg-gray-200 focus:outline-gray-400 focus:outline focus:outline-2 ${errorClasses()}`}
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