import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// mui
import { IconButton, Tooltip, ButtonGroup, Button } from '@mui/material';

// icons
import { BsBoxArrowInRight } from "react-icons/bs";
import { TbUserPlus } from "react-icons/tb";

// navbar data
import { navbarData } from './navbarData';

// font
import { fredoka } from '../../../pages/_app';

// components
import ProfileIcon from './profileIcon/profileIcon';
import SmNavbar from './smNavbar';

const Navbar = () => {
    const router = useRouter();

    return (
        <>
            <SmNavbar />
            <nav
                style={{ height: "var(--navbar-height)" }}
                className={`hidden md:flex py-3 capitalize md:px-12 px-8 shadow-md justify-between items-center sticky top-0 left-0 right-0 bg-white z-[1000] ${fredoka.className}`}
            >

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
                <div className='flex items-center gap-x-2'>
                    {
                        navbarData(null).map((item, index) =>
                            <Tooltip title={item.title} key={index * 7}>
                                <div
                                    className='text-2xl'
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
                        null == null ?
                            <div>
                                <ButtonGroup variant="text" color="inherit" aria-label="text button group">
                                    <Tooltip title={"Login"}>
                                        <Button
                                            className='text-gray-700 text-2xl'
                                            onClick={() => router.push("/auth/login")}
                                        >
                                            <BsBoxArrowInRight />
                                        </Button>
                                    </Tooltip>
                                    <Tooltip title={"Signup"}>
                                        <Button
                                            className='text-gray-700 text-2xl'
                                            onClick={() => router.push("/auth/signup")}
                                        >
                                            <TbUserPlus />
                                        </Button>
                                    </Tooltip>
                                </ButtonGroup>
                            </div>
                            : null
                    }

                    {/* profle */}
                    {/* {
                        user !== null ?
                            null :
                            <>
                                <ProfileIcon />
                            </>
                    } */}
                </div>
            </nav>
        </>
    )
}

export default Navbar;