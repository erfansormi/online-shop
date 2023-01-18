import React from 'react'

interface Props {
    children: React.ReactNode,
    className?: string,
    noPadding?: boolean,
    container?: boolean,
    max_w_3xl?: boolean
}

const Layout = ({ children, className, noPadding, container, max_w_3xl }: Props) => {
    return (
        <div
            className={`${noPadding ? "" : "px-2 md:px-5"} ${max_w_3xl ? "max-w-[1676px]" : "max-w-[1336px]"} mx-auto mt-14 ${className ? className : ""} ${container ? "container" : ""}`}>
            {children}
        </div>
    )
}

export default Layout;