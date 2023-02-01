import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// css
import styles from "./profile.module.css";

// icons
import { BsBoxArrowRight } from 'react-icons/bs'

// data
import { profileSideMenuData } from './profileData'

const ProfileSideMenu = () => {
    const router = useRouter();

    return (
        <div className='capitalize text-gray-900'>

            {/* header */}
            <div>

            </div>

            {/* items */}
            <div>
                {profileSideMenuData.map((item, index) =>
                    <div
                        key={index * 30}
                        className="px-5 hover:bg-gray-100 transition duration-500 first:border-t-0 relative"
                    >
                        {
                            router.pathname === item.link &&
                            <span className={`${styles.menu_item_selected} before:bg-rose-500`}>
                            </span>
                        }
                        <Link
                            href={item.link}
                            className={`${styles.menu_item} gap-x-2 border-t border-x-0 border-b-0 border-solid border-gray-100 ${router.pathname === item.link ? `font-bold` : ""}`}
                        >
                            <span className='flex text-[1.5rem]'>
                                {item.icon}
                            </span>
                            <span>
                                {item.title}
                            </span>
                        </Link>
                    </div>
                )}

                {/* exit */}
                <div className="px-5 hover:bg-gray-100 transition duration-500 first:border-t-0 relative">
                    <div
                        className={`${styles.menu_item} gap-x-2 border-t border-x-0 border-b-0 border-solid border-gray-100`}
                    >
                        <span className='flex text-[1.5rem]'>
                            <BsBoxArrowRight />
                        </span>
                        <span>
                            exit
                        </span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProfileSideMenu