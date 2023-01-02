import React from 'react'

interface Props {
    children: React.ReactNode,
    className?: string,
    noPadding?: boolean,
    container?: boolean
}

const Layout = ({ children, className, noPadding, container }: Props) => {
    return (
        <div className={`${noPadding ? "" : "px-2 md:px-5"} mx-auto mt-14 ${className} ${container ? "container" : ""}`}>
            {children}
        </div>
    )
}

export default Layout;