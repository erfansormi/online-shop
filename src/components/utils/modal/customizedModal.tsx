import { Dialog, DialogProps, IconButton } from '@mui/material';
import React, { ReactNode } from 'react';

// icons
import { AiOutlineClose } from 'react-icons/ai';

// ts
interface Props extends DialogProps {
    title: string,
    open: boolean,
    handleClose: () => void,
    children: ReactNode
}

const CustomizedModal = ({ children, title, handleClose, open, ...props }: Props) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="xs"
            fullWidth
            {...props}
        >
            <div className='px-4 pt-2 pb-5'>
                {/* head */}
                <div className='flex justify-between items-center w-full border-b border-gray-200 border-solid border-x-0 border-t-0 mb-4 py-2'>
                    <h4 className='font-bold text-base capitalize text-gray-700'>
                        {title}
                    </h4>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        className="text-gray-500 text-xl"
                    >
                        <AiOutlineClose />
                    </IconButton>
                </div>

                {/* content */}
                {children}
            </div>
        </Dialog>
    )
}

export default CustomizedModal;