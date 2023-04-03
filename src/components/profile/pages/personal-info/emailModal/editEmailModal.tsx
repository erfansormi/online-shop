import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';

// contexts
import { useUserContext } from '../../../../../context/userContext';
import { useGeneralContext } from '../../../../../context/generalContext';

// axios
import { axiosInstance } from '../../../../../functions/axiosInstance';

// components
import CustomizedModal from '../../../../utils/modal/customizedModal';
import Input from '../../../../data_entry/input/input';
import Label from '../../../../data_display/label';
import { Button } from '@mui/material';

// validation messages
import { emailRegex, required } from '../../../../../functions/validation';

// react toastify
import { toastify } from '../../../../utils/toastify/toastifyFunc';

// types
import { InitialPersonalInfoModal } from '../personalInfoData';
import InputError from '../../../../data_entry/input/inputError';

interface Props {
    modalsInitialValues: InitialPersonalInfoModal,
    setModalsInitialValues: React.Dispatch<React.SetStateAction<InitialPersonalInfoModal>>
}

interface InitialValues {
    email: string
}

// validation form
const FormSchema = Yup.object().shape({
    email: Yup
        .string()
        .required(required("email"))
        .matches(emailRegex, "invalid email!")
});

const EditEmailModal = ({ modalsInitialValues, setModalsInitialValues }: Props) => {
    const { user, setUser } = useUserContext();
    const { closeLoading, openLoading } = useGeneralContext();

    // form initial values
    const initialValues: InitialValues = {
        email: user ? user.email : ""
    }

    // close modal func
    const handleClose = () => {
        setModalsInitialValues({
            ...modalsInitialValues,
            email: false
        })
    }

    // handle form submit
    const handleSubmit = async (values: InitialValues) => {
        if (user) {
            handleClose();
            openLoading();

            await axiosInstance.put("/api/v1/users/edit-email", {
                email: values.email
            })
                .then(res => {
                    setUser({
                        ...user,
                        email: values.email,
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
            open={modalsInitialValues.email}
            title='editing of e-mail'
        >
            <Formik
                initialValues={initialValues}
                validationSchema={FormSchema}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit, handleBlur, handleChange, errors, touched, values }) => (
                    <form onSubmit={handleSubmit} className='flex flex-col gap-y-5'>
                        <div className='flex flex-col gap-y-1'>
                            <Label label='email' required />
                            <Input
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="email"
                            />
                            {touched.email && errors.email ? <InputError error={errors.email} /> : null}
                        </div>

                        <div className='flex justify-end'>
                            <Button
                                variant="contained"
                                type="submit"
                                disabled={user?.email === values.email}
                            >
                                edit
                            </Button>
                        </div>
                    </form>
                )}
            </Formik>
        </CustomizedModal>
    )
}

export default EditEmailModal;