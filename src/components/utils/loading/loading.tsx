import React from 'react'

// mui
import { Backdrop } from '@mui/material'

// react spinner
import { PulseLoader } from 'react-spinners'

// ts
interface Props {
    loading: boolean
}

const Loading = ({ loading }: Props) => {
    return (
        <Backdrop
            open={loading}
        >
            <div className={"w-48 h-48 flex justify-center items-center rounded-lg bg-neutral-300"}>
                <PulseLoader color="#777" />
            </div>
        </Backdrop>
    )
}

export default Loading;