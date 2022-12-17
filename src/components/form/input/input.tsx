import React from 'react'

// css
import styles from "./input.module.css"

// ts
interface IProps {
    error?: string | undefined,
    touched?: boolean | undefined
}

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const Input = ({ error, touched, ...props }: Props & IProps) => {
    return (
        <input
            className={`${styles.input} w-full normal-case h-10 p-3 bg-gray-200 rounded-full focus:outline-gray-400 focus:outline focus:outline-2 ${error && touched ? "outline-2 outline outline-red-500" : ""}`}
            spellCheck={false}
            {...props}
        />
    )
}

export default Input;