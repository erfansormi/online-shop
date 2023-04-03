import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';

// validation messages
import { maxLength, minLength, required } from '../../../../../functions/validation';

// contexts
import { useUserContext } from '../../../../../context/userContext';
import { useGeneralContext } from '../../../../../context/generalContext';

// react toastify
import { toastify } from '../../../../utils/toastify/toastifyFunc';

// components
import CustomizedModal from '../../../../utils/modal/customizedModal';

// axios
import { axiosInstance } from '../../../../../functions/axiosInstance';

// types
import { InitialPersonalInfoModal } from '../personalInfoData';

interface Props {
    modalsInitialValues: InitialPersonalInfoModal,
    setModalsInitialValues: React.Dispatch<React.SetStateAction<InitialPersonalInfoModal>>
}

export interface InitialValues {
    firstName: string,
    lastName: string
}

// components
import EditNameForm from './editNameForm';

// validation form
const FormSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, minLength("name", 3))
        .max(30, maxLength("name", 30))
        .required(required("name")),
    lastName: Yup.string()
        .min(3, minLength("surname", 3))
        .max(30, maxLength("surname", 30))
        .required(required("surname"))
});

const EditNameModal = ({ modalsInitialValues, setModalsInitialValues }: Props) => {
    const { user, setUser } = useUserContext();
    const { closeLoading, openLoading } = useGeneralContext();

    // form initial values
    const initialValues: InitialValues = {
        firstName: user ? user.first_name : "",
        lastName: user ? user.last_name : ""
    }

    // close modal func
    const handleClose = () => {
        setModalsInitialValues({
            ...modalsInitialValues,
            name: false
        })
    }

    // handle form submit
    const handleSubmit = async (values: InitialValues) => {
        if (user) {
            handleClose();
            openLoading();

            await axiosInstance.put("/api/v1/users/edit-name", {
                first_name: values.firstName,
                last_name: values.lastName,
            })
                .then(res => {
                    setUser({
                        ...user,
                        first_name: values.firstName,
                        last_name: values.lastName,
                    })
                    toastify(res.data.message, "success");
                })
                .catch(err => {
                    toastify(err.response.data.message, "error");
                })
                .finally(() => {
                    closeLoading();
                })
        }
    }

    return (
        <CustomizedModal
            handleClose={handleClose}
            open={modalsInitialValues.name}
            title='register identification information'
        >
            <Formik
                initialValues={initialValues}
                validationSchema={FormSchema}
                onSubmit={handleSubmit}
            >
                {(props) => (
                    <EditNameForm {...props} />
                )}
            </Formik>
        </CustomizedModal >
    )
}

export default EditNameModal;