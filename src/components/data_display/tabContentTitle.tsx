import React from 'react'

const TabContentTitle = ({ title, className }: { title: string, className?: string }) => {
    return (
        <h5 className={`${className} text-gray-800 capitalize relative after:content-[""] after:absolute after:w-16 after:h-0.5 after:bg-rose-500 after:-bottom-4 after:left-0`}>
            {title}
        </h5>
    )
}

export default TabContentTitle;