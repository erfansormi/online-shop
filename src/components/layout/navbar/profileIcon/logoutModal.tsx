import React from 'react'

// context
import { useUserContext } from '../../../../context/userContext';

// components
import { Button } from '@mui/material';
import CustomizedModal from '../../../utils/modal/customizedModal';

// axios
import { axiosInstance } from '../../../../functions/axiosInstance';

// react toastify
import { toastify } from '../../../utils/toastify/toastifyFunc';

// types
interface Props {
    modal: boolean,
    profileMenuHandleClose: () => void,
    logoutHandleClose: () => void
}

const LogoutModal = ({ logoutHandleClose, modal, profileMenuHandleClose }: Props) => {
    const { setUser } = useUserContext();

    const handleLogout = async () => {
        try {
            await axiosInstance.get("/api/v1/users/logout")
            setUser(null);
            logoutHandleClose();
            profileMenuHandleClose();
            toastify("logout successfully!", "light", "warning");
        }
        catch (err: any) {
            logoutHandleClose();
            toastify(err.response.data.message || err.message, "light", "error");
        }
    }

    return (
        <CustomizedModal
            open={modal}
            handleClose={logoutHandleClose}
            title={"logout account"}
        >
            <div className='flex flex-col gap-y-8'>
                <p className='text-sm text-gray-500'>
                    are you sure you want to logout of your account?
                </p>
                <div className='flex gap-x-4 justify-end'>
                    <div>
                        <Button onClick={handleLogout} variant="contained">
                            yes
                        </Button>
                    </div>
                    <div>
                        <Button onClick={logoutHandleClose}>
                            cancel
                        </Button>
                    </div>
                </div>
            </div>
        </CustomizedModal>
    )
}

export default LogoutModal;