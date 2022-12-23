import React, { useState } from 'react'
import Link from 'next/link';

// mui
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

// toastify
import { toastify } from '../../../utils/toastify/toastifyFunc';

// authentication
import { auth } from "../../../../firebase/app";

// icons
import { MdLogout } from "react-icons/md";
import { FiUser } from "react-icons/fi";

// menu items data
import { profileMenuItem } from './profileData';

// redux
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../../redux/user/authSlice';

// components
import Modal from '../../../utils/modal/modal';

const Profile = () => {
    // redux
    const dispatch = useDispatch();

    // logout modal
    const [modal, setModal] = useState(false);

    // is menu open?
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    // menu func
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        auth.signOut();
        setModal(false);
        handleClose();
        dispatch(logoutUser());
        toastify("logout successfuly!", "dark", "success");
    }

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                    <div className='ml-3'>
                        <IconButton
                            onClick={handleClick}
                            sx={{ margin: 0 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            className='text-gray-700 text-2xl'
                        >
                            <FiUser />
                        </IconButton>
                    </div>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        minWidth: "200px",
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
                {profileMenuItem.map((item, index) =>
                    <div key={index * 13}>
                        <MenuItem>
                            <Link href={item.link} className="flex items-center">
                                <ListItemIcon className='text-gray-600 text-2xl'>
                                    {item.icon}
                                </ListItemIcon>
                                <span>
                                    {item.title}
                                </span>
                            </Link>
                        </MenuItem>
                        {
                            index == 1 ?
                                <Divider />
                                : null
                        }
                    </div>
                )}
                <MenuItem onClick={() => setModal(true)}>
                    <ListItemIcon className='text-gray-600 text-2xl'>
                        <MdLogout />
                    </ListItemIcon>
                    <span>
                        Logout
                    </span>
                </MenuItem>

                {/* logout modal */}
                <Modal
                    buttonFunc={handleLogout}
                    description={"are you sure to logout to your account?"}
                    open={modal}
                    setOpen={setModal}
                    title={"logout account?"}
                />
            </Menu>
        </React.Fragment>
    );
}

export default Profile;