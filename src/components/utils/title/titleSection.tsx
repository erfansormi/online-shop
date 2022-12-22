import React from 'react'

interface Props {
    title: string
}

const TitleSection = ({ title }: Props) => {
    return (
        <div className='mb-5'>
            <h2 className='text-2xl text-gray-900'>
                {title}
            </h2>
        </div>
    )
}

export default TitleSection;