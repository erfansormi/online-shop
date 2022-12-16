import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// authentication
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase/app';

// navbar data
import { navbarData } from './navbarData';

interface Props {
    className: string
}

const Navbar = ({ className }: Props) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            console.log(user);
            // ...
        } else {
            // User is signed out
            // ...
            console.log(null);

        }
    });

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
                <div className='flex'>
                    {navbarData(null).map((item, index) =>
                        <div
                            key={index * 7}
                            className='text-2xl ml-5'
                        >
                            <Link href={item.link}>
                                {item.icon}
                            </Link>
                        </div>
                    )}
                </div>
            </nav>
        </>
    )
}

export default Navbar;