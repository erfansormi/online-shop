import React from 'react'
import { axiosInstance } from '../../../../../../functions/axiosInstance';

// data
import { AddressSchema } from './addressDetailData';

// user context hook
import { useUserContext } from '../../../../../../context/userContext';

// general context hook
import { useGeneralContext } from '../../../../../../context/generalContext';

// react toastify
import { toastify } from '../../../../../utils/toastify/toastifyFunc';

// zustand store
import useAddressValues, { AddressDetailValues } from '../../../../../../store/userAddress';

// components
import CustomizedModal from '../../../../../utils/modal/customizedModal';
import { Formik } from 'formik';
import AddressDetailForm from './addressDetailForm';

const AddressDetailModal = () => {
    const { setModal, modal, addressDetailValues } = useAddressValues(state => state.addressDetail);
    const { viewport } = useAddressValues(state => state.map);

    // contexts
    const { openLoading, closeLoading } = useGeneralContext();
    const { user, setUser } = useUserContext();

    // close modal
    const handleClose = () => {
        setModal(false)
    }

    // handle form submit
    const handleSubmit = async (values: AddressDetailValues) => {
        handleClose();
        openLoading();

        await axiosInstance.post("/api/v1/users/add-address", {
            coordinates: [viewport.longitude, viewport.latitude],
            postal_address: values.postal_address,
            province: values.province,
            city: values.city,
            plaque: values.plaque,
            unit: values.unit,
            postal_code: values.postal_code
        })
            .then(res => {
                if (user) {
                    setUser({
                        ...user,
                        addresses: [...user.addresses, {
                            coordinates: [viewport.longitude, viewport.latitude],
                            postal_address: values.postal_address,
                            province: values.province,
                            city: values.city,
                            plaque: values.plaque,
                            unit: values.unit,
                            postal_code: values.postal_code,
                            _id: undefined
                        }]
                    })
                }
                toastify(res.data.message, "success");
            })
            .catch(err => {
                toastify(err.response.data.message || err.message, "error");
            })
            .finally(() => {
                closeLoading();
            })
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