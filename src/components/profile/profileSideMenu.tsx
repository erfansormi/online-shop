import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// css
import styles from "./profile.module.css";

// icons
import { BsBoxArrowRight } from 'react-icons/bs'
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineEdit } from 'react-icons/ai';

// data
import { profileSideMenuData } from './profileData'

// context
import { useUserContext } from '../../context/userContext';
import { Skeleton } from '@mui/material';

// components
import LogoutModal from '../layout/navbar/profileIcon/logoutModal';

const ProfileSideMenu = () => {
    const router = useRouter();

    // logout modal
    const [logoutModal, setLogoutModal] = useState(false);

    // user context
    const { user } = useUserContext();

    return (
        <div className='capitalize text-gray-900'>

            {/* header */}
            <div className='p-5 flex flex-wrap items-center gap-y-2 gap-x-4'>
                <div>
                    <FaUserCircle className='text-gray-300 text-[3.3rem] leading-5' />
                </div>
                <div className='flex items-center justify-between w-full'>
                    <div className='flex flex-col gap-y-0.5'>

                        {/* name and surname */}
                        <span className='text-gray-700 text-lg font-bold'>
                            {
                                user ?
                                    `${user.first_name} ${user.last_name}` :
                                    <Skeleton className='w-32 h-6' />
                            }
                        </span>

                        {/* email */}
                        <span className='text-gray-400 text-sm normal-case'>
                            {
                                user ?
                                    user.email :
                                    <Skeleton className='w-44 h-4' />
                            }
                        </span>
                    </div>

                    {/* edit personal info link */}
                    <div>
                        {
                            user &&
                            <Link href={"/profile/personal-info"}>
                                <AiOutlineEdit className='text-2xl text-cyan-500' />
                            </Link>
                        }
                    </div>
                </div>
            </div>

            {/* items */}
            <div>
                {
                    profileSideMenuData.map((item, index) =>
                        <div
                            key={index * 30}
                            className="px-5 hover:bg-gray-100 transition duration-500 first:border-t-0 relative"
                        >
                            {
                                router.pathname === item.link &&
                                <span className={`${styles.menu_item_selected} before:bg-rose-500 before:content-['']`}>
                                </span>
                            }
                            <Link
                                href={item.link}
                                className={`${styles.menu_item} gap-x-2 border-t border-x-0 border-b-0 border-solid border-gray-100 ${router.pathname === item.link ? `font-bold` : ""}`}
                            >
                                <span className='flex text-[1.5rem]'>
                                    {user && item.icon}
                                </span>
                                <span>
                                    {
                                        user ?
                                            item.title :
                                            <Skeleton className="w-28 h-5" />
                                    }
                                </span>
                            </Link>
                        </div>
                    )
                }

                {/* exit */}
                <div className="px-5 hover:bg-gray-100 transition duration-500 first:border-t-0 relative">
                    <div
                        className={`${styles.menu_item} gap-x-2 border-t border-x-0 border-b-0 border-solid border-gray-100`}
                        onClick={() => setLogoutModal(true)}
                    >
                        <span className='flex text-[1.5rem]'>
                            {user && <BsBoxArrowRight />}
                        </span>
                        <span>
                            {
                                user ?
                                    "exit" :
                                    <Skeleton className="w-28 h-5" />
                            }
                        </span>
                    </div>
                </div>

                {/* logout modal */}
                <LogoutModal
                    modal={logoutModal}
                    logoutHandleClose={() => setLogoutModal(false)}
                />
            </div>
        </div >
    )
}

export default ProfileSideMenu