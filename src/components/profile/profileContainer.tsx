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
            <div className='flex gap-x-8'>

                {/* side menu */}
                <aside className='w-[30%] border border-solid border-gray-200 rounded-lg'>
                    <ProfileSideMenu />
                </aside>

                {/* content */}
                <div className='w-[70%] border border-solid border-gray-200 rounded-lg flex items-center justify-center'>
                    {children}
                </div>
            </div>
        </Layout>
    )
}

export default ProfileContainer