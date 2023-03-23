import React from 'react'

interface Props {
    label: string,
    required?: boolean
}

const Label = ({ label, required, ...props }: Props & React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>) => {
    return (
        <label className={`text-base capitalize text-gray-800 ${required && "after:content-['*'] after:text-red-500 after:ml-1 after:leading-4 after:align-middle"}`} {...props}>
            {label}
        </label>
    )
}

export default Label