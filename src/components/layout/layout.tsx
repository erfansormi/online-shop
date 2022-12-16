import React from 'react'

interface Props {
    children: React.ReactNode,
    className?: string
}

const Layout = ({ children, className }: Props) => {
    return (
        <div className={`container mx-auto my-2 px-6 ${className}`}>
            {children}
        </div>
    )
}

export default Layout;