import React, { useState } from 'react';
import Link from 'next/link';

// axios
import { axiosInstance } from '../../../../functions/axiosInstance';

// toast
import { toastify } from '../../../utils/toastify/toastifyFunc';

// mui
import { Divider, ListItemIcon, Menu, MenuItem } from '@mui/material';

// icons
import { MdLogout } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';

// menu items data
import { profileMenuItem } from './profileIconData';

// components
import QuestionModal from '../../../utils/modal/questionModal';

// types
interface Props {
    anchorEl: HTMLElement | null,
    setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>,
    open: boolean
}

// context
import { useUserContext } from '../../../../context/userContext';

const ProfileIconMenu = ({ anchorEl, setAnchorEl, open }: Props) => {
    const { user, setUser } = useUserContext();

    const handleClose = () => {
        setAnchorEl(null);
    };

    // logout modal
    const [modal, setModal] = useState(false);

    const handleLogout = async () => {
        try {
            await axiosInstance.get("/api/v1/users/logout")
            setUser(null);
            setModal(false);
            handleClose();
            toastify("logout successfully!", "light", "warning");
        }
        catch (err: any) {
            setModal(false);
            toastify(err.response.data.message || err.message, "light", "error");
        }
    }

    return (
        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 4px 5px rgba(0,0,0,0.2))',
                    minWidth: "220px",
                    mt: 1.5,
                    borderRadius: "8px",
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            {/* menu list */}
            {
                profileMenuItem(user).map((item, index) =>
                    <div key={index * 13}>
                        <MenuItem className='py-3' onClick={handleClose}>
                            <Link href={item.link} className="flex items-center">
                                <ListItemIcon className='text-gray-600 text-2xl'>
                                    {item.icon}
                                </ListItemIcon>
                                <span className={`capitalize text-gray-700 ${index === 0 ? "font-bold" : ""}`}>
                                    {item.title}
                                </span>
                                {
                                    index === 0 &&
                                    <MdKeyboardArrowRight className="text-xl ml-8 text-gray-600" />
                                }
                            </Link>
                        </MenuItem>
                        {index == 0 && <Divider />}
                    </div>
                )}

            {/* logout */}
            <MenuItem onClick={() => setModal(true)}>
                <ListItemIcon className='text-gray-600 text-2xl py-1'>
                    <MdLogout />
                </ListItemIcon>
                <span>
                    Logout
                </span>
            </MenuItem>

            {/* logout modal */}
            <QuestionModal
                buttonFunc={handleLogout}
                description={"are you sure to logout to your account?"}
                open={modal}
                setOpen={setModal}
                title={"logout account?"}
            />
        </Menu>
    )
}

export default ProfileIconMenu