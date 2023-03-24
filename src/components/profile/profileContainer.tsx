import React from 'react'

// components
import Layout from '../layout/layout'
import ProfileSideMenu from './profileSideMenu'

// types
interface Props {
    children: React.ReactNode
}

const ProfileContainer = ({ children }: Props) => {
    return (
        <Layout className='mt-16'>
            <div className='flex flex-col md:flex-row gap-8'>

                {/* side menu */}
                <aside className='w-full md:w-[30%] border border-solid border-gray-200 rounded-lg'>
                    <ProfileSideMenu />
                </aside>

                {/* content */}
                <div className='w-full md:w-[70%] border p-10 border-solid border-gray-200 rounded-lg flex items-center justify-center'>
                    {children}
                </div>
            </div>
        </Layout>
    )
}

export default ProfileContainer