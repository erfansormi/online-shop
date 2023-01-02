import React from 'react'

interface Props {
    title: string,
    textCenter?: boolean
}

const TitleSection = ({ title, textCenter }: Props) => {
    return (
        <div className='mb-5'>
            <h2 className={`text-2xl text-gray-900 ${textCenter ? "text-center" : ""}`}>
                {title}
            </h2>
        </div>
    )
}

export default TitleSection;