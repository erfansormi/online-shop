import React, { useState } from 'react';

// data
import { personalInfoData } from '../../components/profile/pages/personal-info/personalInfoData';

// context
import { useUserContext } from '../../context/userContext';

// icons
import { AiOutlineEdit } from 'react-icons/ai';

// ts
import { InitialPersonalInfoModal } from '../../components/profile/pages/personal-info/personalInfoData';

// components
import ProfileContainer from '../../components/profile/profileContainer';
import { Skeleton } from '@mui/material';
import EditEmailModal from '../../components/profile/pages/personal-info/emailModal/editEmailModal';
import EditNameModal from '../../components/profile/pages/personal-info/nameModal/editNameModal';
import EditPasswordModal from '../../components/profile/pages/personal-info/passwordModal/editPasswordModal';
import EditBirthDateModal from '../../components/profile/pages/personal-info/birthDateModal/editBirthDateModal';
import ProfileContentContainer from '../../components/profile/profileContentContainer';

const PersonalInfo = () => {
    const { user } = useUserContext();

    // open modals values
    const initial: InitialPersonalInfoModal = {
        name: false,
        email: false,
        password: false,
        birthDate: false
    }
    const [modalsInitialValues, setModalsInitialValues] = useState(initial);

    return (
        <ProfileContainer>
            <ProfileContentContainer>
                <div className='grid grid-cols-1 sm:grid-cols-2 w-full'>

                    {/* editable user items */}
                    {
                        !!user ?
                            personalInfoData(user).map((item, index) =>
                                <div
                                    key={index * 60}
                                    className="flex items-center justify-between px-3 py-6 border-b sm:[&:nth-child(n+3)]:border-b-0 border-t-0 border-x-0 sm:odd:border-r border-solid border-gray-100"
                                >
                                    <div className='flex flex-col gap-y-2'>
                                        <span className='text-gray-500 text-base capitalize'>
                                            {item.title}
                                        </span>
                                        <span className='text-gray-700 font-bold text-base tracking-wide'>
                                            {item.value}
                                        </span>
                                    </div>
                                    <div>
                                        <span onClick={() => setModalsInitialValues({ ...initial, [item.name]: true })}>
                                            <AiOutlineEdit className='text-3xl cursor-pointer' />
                                        </span>
                                    </div>
                                </div>
                            ) :

                            // skeleton loading 
                            <>
                                {
                                    [...Array(4)].map((item, index) =>
                                        <div className='p-4' key={index * 63}>
                                            <div className='flex flex-col gap-y-2'>
                                                <Skeleton className='w-[20%]' />
                                                <Skeleton className='w-[50%]' />
                                            </div>
                                        </div>
                                    )
                                }
                            </>
                    }

                    {/* modals */}
                    <EditNameModal modalsInitialValues={modalsInitialValues} setModalsInitialValues={setModalsInitialValues} />
                    <EditEmailModal modalsInitialValues={modalsInitialValues} setModalsInitialValues={setModalsInitialValues} />
                    <EditPasswordModal modalsInitialValues={modalsInitialValues} setModalsInitialValues={setModalsInitialValues} />
                    <EditBirthDateModal modalsInitialValues={modalsInitialValues} setModalsInitialValues={setModalsInitialValues} />

                </div>
            </ProfileContentContainer>
        </ProfileContainer>
    )
}

export default PersonalInfo;