import React, { useState } from 'react'

// mui
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

// icons
import { FiUser } from "react-icons/fi";

// components
import ProfileIconMenu from './profileIconMenu';

const ProfileIcon = () => {
    // is menu open?
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <>
            <Box className="flex items-center text-center">
                <Tooltip title="Profile">
                    <div>
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
            <ProfileIconMenu
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                open={open}
            />
        </>
    );
}

export default ProfileIcon;