import React from 'react'

interface Props {
    title: string
}

const TitleSection = ({ title }: Props) => {
    return (
        <div className='mb-7'>
            <h2 className='text-2xl'>
                {title}
            </h2>
        </div>
    )
}

export default TitleSection;