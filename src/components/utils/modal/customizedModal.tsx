import { Dialog, DialogProps, IconButton } from '@mui/material';
import React, { ReactNode } from 'react';

// icons
import { AiOutlineClose } from 'react-icons/ai';

// ts
interface Props extends DialogProps {
    title: string,
    open: boolean,
    handleClose: () => void,
    children: ReactNode,
    description?: string
    className?: string
}

const CustomizedModal = ({ className, description, children, title, handleClose, open, ...props }: Props) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="xs"
            fullWidth
            {...props}
        >
            <div className={`${className} px-4 pt-2 pb-5`}>
                {/* head */}
                <div className={`flex justify-between sticky top-0 z-50 bg-white ${!description ? "items-center" : ""} w-full border-b border-gray-200 border-solid border-x-0 border-t-0 mb-4 py-4`}>
                    <div className='flex flex-col gap-y-2'>
                        <h4 className='font-bold text-base capitalize text-gray-700'>
                            {title}
                        </h4>
                        {
                            description &&
                            <p className='text-gray-500 lowercase text-sm'>
                                {description}
                            </p>
                        }
                    </div>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        className="text-gray-500 text-xl h-fit"
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