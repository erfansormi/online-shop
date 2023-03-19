import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';

// mui
import { IconButton, Tooltip, ButtonGroup, Button, Skeleton } from '@mui/material';

// icons
import { BsBoxArrowInRight } from "react-icons/bs";
import { TbUserPlus } from "react-icons/tb";

// navbar data
import { userLoggedInIcons } from './navbarData';

// font
import { fredoka } from '../../../pages/_app';

// context
import { useUserContext } from '../../../context/userContext';

// components
import ProfileIcon from './profileIcon/profileIcon';
import SmNavbar from './smNavbar';

const Navbar = () => {
    const [loading, setLoading] = useState(true);
    const { token, setToken } = useUserContext();

    useEffect(() => {
        setLoading(false);
    }, [token, setToken])

    return (
        <>
            <SmNavbar />
            <nav
                style={{ height: "var(--navbar-height)" }}
                className={`hidden md:flex py-3 capitalize md:px-12 px-8 shadow-md justify-between items-center sticky top-0 left-0 right-0 bg-white z-[1000] ${fredoka.className}`}
            >

                {/* left buttons */}
                <div className='h-full flex items-center gap-x-5'>
                    <div className='h-full'>
                        <Link
                            href={"/"}
                            as={"/"}
                            className='h-full flex items-center'
                        >
                            <Image
                                src="/images/shop-logo.png"
                                alt='shop logo'
                                width={40}
                                height={40}
                                className='mr-1'
                            />
                            <span className='text-rose-500 font-bold text-lg'>
                                online shop
                            </span>
                        </Link>
                    </div>
                    <div>
                        <Link
                            href={"/products"}
                            className="text-lg text-gray-700"
                        >
                            products
                        </Link>
                    </div>
                </div>

                {/* right buttons */}
                {
                    loading ?
                        <div className='flex items-center gap-x-5'>
                            <Skeleton variant='rounded' className="w-9 h-9" />
                            <Skeleton variant='rounded' className="w-9 h-9" />
                            <Skeleton variant='rounded' className="w-9 h-9" />
                        </div> :

                        <div className='flex items-center gap-x-2'>

                            {/* user logged in  buttons*/}
                            {
                                token && userLoggedInIcons.map((item, index) =>
                                    <Tooltip title={item.title} key={index * 7}>
                                        <div className='text-2xl'>
                                            <Link href={item.link} className="flex">
                                                <IconButton
                                                    className='text-2xl text-gray-700 m-0'
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
                                !token &&
                                <div>
                                    <ButtonGroup variant="text" color="inherit" aria-label="text button group">
                                        <Tooltip title={"Login"}>
                                            <Link href={"/auth/login"}>
                                                <Button className='text-gray-700 text-2xl'>
                                                    <BsBoxArrowInRight />
                                                </Button>
                                            </Link>
                                        </Tooltip>
                                        <Tooltip title={"Signup"}>
                                            <Link href={"/auth/signup"}>
                                                <Button className='text-gray-700 text-2xl'>
                                                    <TbUserPlus />
                                                </Button>
                                            </Link>
                                        </Tooltip>
                                    </ButtonGroup>
                                </div>
                            }

                            {/* user profile */}
                            {token && <ProfileIcon />}
                        </div>
                }
            </nav>
        </>
    )
}

export default Navbar;