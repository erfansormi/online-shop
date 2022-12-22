import React from 'react'

interface Props {
    children: React.ReactNode,
    className?: string,
    noPadding?: boolean,
    noContainer?: boolean
}

const Layout = ({ children, className, noPadding, noContainer }: Props) => {
    return (
        <div className={`${noContainer ? "" : "container"} mx-auto mt-14 ${noPadding ? "" : "px-10"} ${className}`}>
            {children}
        </div>
    )
}

export default Layout;