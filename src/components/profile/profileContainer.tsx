import React from 'react';
import { useRouter } from "next/router";

// user context
import { useUserContext } from '../../context/userContext';

// components
import Layout from '../layout/layout';
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
            <div className='flex flex-col md:flex-row gap-8'>

                {/* side menu */}
                <aside className='w-full md:w-[35%] md:max-w-[380px] overflow-x-auto border border-solid border-gray-200 rounded-lg'>
                    <ProfileSideMenu />
                </aside>

                {/* content */}
                <div className='w-full border px-4 border-solid border-gray-200 rounded-lg h-fit'>
                    {children}
                </div>
            </div>
        </Layout>
    )
}

export default ProfileContainer