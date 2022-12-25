import React from 'react'

interface Props {
    children: React.ReactNode,
    className?: string,
    noPadding?: boolean,
    noContainer?: boolean
}

const Layout = ({ children, className, noPadding, noContainer }: Props) => {
    return (
        <div className={`${noPadding ? "" : "px-3 md:px-10 sm:px-6"} ${noContainer ? "" : "container"} mx-auto mt-14 ${className}`}>
            {children}
        </div>
    )
}

export default Layout;