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

type Props = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

const TextArea = ({ height, error, touched, className, useInForm, ...props }: Props & IProps) => {
    const errorClasses = () => {
        if (error && touched) {
            return "outline-2 outline outline-red-500"
        }
    }

    return (
        <>
            <textarea
                className={`${className ? className : ""} ${styles.input} w-full normal-case rounded-md p-3 bg-gray-200 focus:outline-gray-400 border-0 focus:outline focus:outline-2 ${errorClasses()} resize-y min-h-[100px] max-h-[200px] text-base`}
                {...props}
            >
            </textarea>
            {
                error && touched ?
                    <InputError error={error} />
                    : null
            }
        </>
    )
}

export default TextArea