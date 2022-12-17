import React from 'react'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

// authentication
import { auth } from "../../../../firebase/app";

// icons
import { MdLogout } from "react-icons/md";
import { IoMdSettings } from "react-icons/io"
import { BsBagFill } from 'react-icons/bs';
import { FiUser } from "react-icons/fi";

// menu items
import { profileMenuItem } from './profileData';
import Link from 'next/link';

const Profile = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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
                        >
                            <FiUser
                                className='text-gray-700 text-2xl'
                            />
                        </IconButton>
                    </div>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
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
                                <ListItemIcon className='text-gray-500 text-2xl'>
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
                <MenuItem onClick={() => auth.signOut()}>
                    <ListItemIcon className='text-gray-500 text-2xl'>
                        <MdLogout />
                    </ListItemIcon>
                    <span>
                        Logout
                    </span>
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}

export default Profile;