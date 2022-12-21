import React from 'react'

interface Props {
    children: React.ReactNode,
    className?: string,
    noPadding?: boolean
}

const Layout = ({ children, className, noPadding }: Props) => {
    return (
        <div className={`container mx-auto mt-14 ${noPadding ? "" : "px-10"} ${className}`}>
            {children}
        </div>
    )
}

export default Layout;