import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// mui
import { Skeleton } from '@mui/material';

// data
import { smNavData } from './navbarData';

// user context
import { useUserContext } from '../../../context/userContext';

const SmNavbar = () => {
    const router = useRouter();

    // user context
    const { user, loading } = useUserContext();

    return (
        <nav
            className='md:hidden bg-white shadow-md z-[1000] fixed bottom-0 right-0 left-0'
            style={{ height: "var(--sm-navbar-height)" }}
        >
            <div className='w-full h-full flex justify-around items-center'>
                {
                    !loading ?
                        smNavData(user).map((item, index) =>
                            <div key={index * 37}>
                                <Link
                                    href={item.link}
                                    className={`h-full flex flex-col ${item.link !== "/" && router.pathname.includes(item.link) ? "text-rose-500" : item.link === "/" && router.pathname === "/" ? "text-rose-500" : "text-gray-700"} w-16 justify-center items-center`}
                                >
                                    <span className='text-2xl'>
                                        {item.icon}
                                    </span>
                                    <span className='capitalize text-sm'>
                                        {item.title}
                                    </span>
                                </Link>
                            </div>
                        ) :
                        [...Array(4)].map((item, index) =>
                            <div key={index * 68} className="h-full flex items-center">
                                <Skeleton width={35} height={35} className='scale-100' />
                            </div>
                        )
                }
            </div>
        </nav>
    )
}

export default SmNavbar