import React from 'react'

// data
import { AddressSchema } from './addressDetailData';

import useAddressValues from '../../../../../store/userAddress';

// components
import CustomizedModal from '../../../../utils/modal/customizedModal';
import { Formik } from 'formik';
import AddressDetailForm from './addressDetailForm';

const AddressDetailModal = () => {
    const { setModal, modal, addressDetailValues } = useAddressValues(state => state.addressDetail);

    // close modal
    const handleClose = () => {
        setModal(false)
    }

    // handle form submit
    const handleSubmit = () => {

    }

    return (
        <CustomizedModal
            open={modal}
            title='address detail'
            handleClose={handleClose}
            maxWidth="sm"
        >
            <Formik
                initialValues={addressDetailValues}
                onSubmit={handleSubmit}
                validationSchema={AddressSchema}
            >
                {(props) => (
                    <AddressDetailForm {...props} />
                )}
            </Formik>

        </CustomizedModal>
    )
}

export default AddressDetailModal;