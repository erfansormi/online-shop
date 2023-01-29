import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// data
import { smNavData } from './navbarData';

const SmNavbar = () => {
    const router = useRouter();

    return (
        <nav
            className='md:hidden bg-white shadow-md z-[1000] fixed bottom-0 right-0 left-0'
            style={{ height: "var(--navbar-height)" }}
        >
            <div className='w-full h-full flex justify-around'>
                {
                    smNavData.map((item, index) =>
                        <div key={index * 37}>
                            <Link
                                href={item.link}
                                className={`h-full w-full flex flex-col ${item.link !== "/" && router.pathname.includes(item.link) ? "text-rose-500" : item.link === "/" && router.pathname === "/" ? "text-rose-500" : "text-gray-700"} w-16 justify-center items-center`}
                            >
                                <span className='text-3xl'>
                                    {item.icon}
                                </span>
                                <span className='capitalize text-sm'>
                                    {item.title}
                                </span>
                            </Link>
                        </div>
                    )
                }
            </div>
        </nav>
    )
}

export default SmNavbar