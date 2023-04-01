import React, { ReactNode } from 'react'

const ProfileContentContainer = ({ children }: { children: ReactNode }) => {
    return (
        <div className='border border-solid border-gray-200 rounded-lg px-4'>
            {children}
        </div>
    )
}

export default ProfileContentContainer;