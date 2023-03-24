import React from 'react'
import Image from 'next/image';

// mui
import { Backdrop } from '@mui/material'

// react spinner
import { PulseLoader } from 'react-spinners'

// use context hook
import { useGeneralContext } from "../../../context/generalContext";

const Loading = () => {
    const { general } = useGeneralContext();

    return (
        <Backdrop
            open={general.loading}
            sx={{ zIndex: 1000 }}
        >
            <div className={"w-48 h-48 flex flex-col justify-center items-center rounded-lg bg-neutral-300 gap-y-2"}>
                <div className='animate-bounce'>
                    <Image
                        src="/images/shop-logo.png"
                        alt='shop logo'
                        width={50}
                        height={50}
                    />
                </div>
                <div>
                    <PulseLoader color="#777" />
                </div>
            </div>
        </Backdrop>
    )
}

export default Loading;