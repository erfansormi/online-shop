import React, { Dispatch, SetStateAction } from 'react'

// types
interface Props {
    open: boolean;
    setDetailModal: Dispatch<SetStateAction<boolean>>;
    viewport: {
        latitude: number;
        longitude: number;
        zoom: number;
    }
}

// components
import CustomizedModal from '../../../utils/modal/customizedModal';

const AddressDetail = ({ open, setDetailModal, viewport }: Props) => {
    const handleClose = () => {
        setDetailModal(false)
    }

    return (
        <CustomizedModal
            open={open}
            title='address detail'
            handleClose={handleClose}
        >

        </CustomizedModal>
    )
}

export default AddressDetail;