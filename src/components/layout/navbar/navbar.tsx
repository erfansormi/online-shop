import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// mui
import { IconButton, Tooltip, ButtonGroup, Button } from '@mui/material';

// icons
import { BsBoxArrowInRight } from "react-icons/bs";
import { TbUserPlus } from "react-icons/tb";

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

    }, [])

    return (
        <>
            <nav style={{ height: "var(--navbar-height)" }} className={`py-3 flex capitalize text-gray-800 md:px-12 px-8 justify-between items-center ${className}`}>

                {/* left buttons */}
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

                {/* right buttons */}
                <div className='flex items-center'>
                    {
                        loading ? null :
                            navbarData(user).map((item, index) =>
                                <Tooltip title={item.title} key={index * 7}>
                                    <div
                                        className='text-2xl ml-3'
                                    >
                                        <Link href={item.link} className="flex">
                                            <IconButton
                                                sx={{ margin: 0 }}
                                                className='text-2xl text-gray-700'
                                            >
                                                {item.icon}
                                            </IconButton>
                                        </Link>
                                    </div>
                                </Tooltip>
                            )
                    }

                    {/* login or signup buttons */}
                    {
                        user == null ?
                            <div className='flex items-center text-gray-700 ml-2'>
                                <div className='mr-2'>
                                    <Tooltip title={"login"}>
                                        <Link href={"/auth/login"}>
                                            <IconButton className='text-gray-700 text-2xl'>
                                                <BsBoxArrowInRight />
                                            </IconButton>
                                        </Link>
                                    </Tooltip>
                                </div>
                                <span className='text-2xl'>/</span>
                                <div className='border-l-2 border-gray-500'>
                                    <Tooltip title={"signup"}>
                                        <Link href={"/auth/signup"}>
                                            <IconButton className='text-gray-700 text-2xl'>
                                                <TbUserPlus />
                                            </IconButton>
                                        </Link>
                                    </Tooltip>
                                </div>
                            </div>
                            : null
                    }

                    {/* profle */}
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