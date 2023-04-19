import React from 'react';
import { useRouter } from "next/router";

// user context
import { useUserContext } from '../../../context/userContext';

// components
import Layout from '../../layout/layout';
import ProfileSideMenu from './profileSideMenu';

// types
interface Props {
    children: React.ReactNode,
}

const ProfileContainer = ({ children }: Props) => {
    const { user, loading } = useUserContext();
    const router = useRouter();

    // if user not logged in, redirect in home page
    if (user === null && loading === false) {
        router.push("/");
    }

    return (
        <Layout className='mt-4 md:mt-8'>
            <div className='flex flex-col md:flex-row gap-6'>

                {/* side menu */}
                <aside className='w-full h-fit static md:sticky md:top-10 md:w-[35%] lg:w-[30%] xl:w-[25%] overflow-x-auto border border-solid border-gray-200 rounded-lg'>
                    <ProfileSideMenu />
                </aside>

                {/* content */}
                <div className='w-full md:w-[65%] lg:w-[70%] xl:w-[75%] flex flex-col gap-y-6 h-fit'>
                    {children}
                </div>
            </div>
        </Layout>
    )
}

export default ProfileContainer