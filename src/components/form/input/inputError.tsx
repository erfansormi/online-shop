import React from 'react'

interface Props {
    error: string | undefined,
    noMargin?: boolean
}

const InputError = ({ error, noMargin }: Props) => {
    return (
        <span className={`text-xs text-red-500 ${noMargin ? "" : "ml-3"}`}>
            {error}
        </span>
    )
}

export default InputError