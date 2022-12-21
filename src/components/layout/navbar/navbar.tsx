import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// mui
import { IconButton, Tooltip, Skeleton } from '@mui/material';

// authentication
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../../firebase/app';

// navbar data
import { navbarData } from './navbarData';

// redux
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from '../../../redux/user/authSlice';
import { State } from '../../../redux/store';

// components
import Profile from './profile/profile';

// types
interface Props {
    className?: string
}

const Navbar = ({ className }: Props) => {
    // redux
    const user = useSelector((state: State) => state.auth.user);
    const dispatch = useDispatch();

    // states
    const [loading, setLoading] = useState(false);


    // is user loggedin?
    useEffect(() => {
        setLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user !== null) {
                dispatch(getUserData(user));
                setLoading(false);
            }
            else {
                setLoading(false);
            }
        });
    }, [dispatch])

    return (
        <>
            <nav className={`h-16 py-3 flex capitalize text-gray-800 md:px-12 px-8 justify-between items-center ${className}`}>
                <div className='h-full flex items-center'>
                    <div className='h-full mr-5'>
                        <Link
                            href={"/"}
                            as={"/"}
                            className='h-full flex items-center'
                        >
                            <Image
                                src="/images/shop-logo.png"
                                alt='shop logo'
                                width={70}
                                height={70}
                                className='h-full w-auto mr-1'
                            />
                            <span>
                                home
                            </span>
                        </Link>
                    </div>
                    <div>
                        <Link
                            href={"/products"}
                        >
                            products
                        </Link>
                    </div>
                </div>
                <div className='flex items-center'>
                    {
                        loading ?
                            <Skeleton variant="rounded" width={120} height={32} /> :
                            navbarData(user).map((item, index) =>
                                <Tooltip title={item.title} key={index * 7}>
                                    <div
                                        className='text-2xl ml-3'
                                    >
                                        <Link href={item.link} className="flex">
                                            <IconButton
                                                sx={{ margin: 0 }}
                                                className='text-gray-700 text-2xl'
                                            >
                                                {item.icon}
                                            </IconButton>
                                        </Link>
                                    </div>
                                </Tooltip>
                            )}
                    {
                        loading || user == null ?
                            null :
                            <Profile />
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar;