import React from 'react'

interface Props {
    error: string | undefined
}

const InputError = ({ error }: Props) => {
    return (
        <span className='ml-3 text-xs text-red-500'>
            {error}
        </span>
    )
}

export default InputError