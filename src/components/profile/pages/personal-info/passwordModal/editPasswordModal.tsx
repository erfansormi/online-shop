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
import { minLength, required } from '../../../../../functions/validation';

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
    currentPassword: string
    newPassword: string
    newPasswordConfirm: string
}

interface Inputs {
    name: keyof InitialValues,
    label: string
}

// inputs data
const inputsData: Inputs[] = [
    {
        name: "currentPassword",
        label: "current password"
    },
    {
        name: "newPassword",
        label: "new password"
    },
    {
        name: "newPasswordConfirm",
        label: "repeat new password"
    }
]

// validation form
const FormSchema = Yup.object().shape({
    currentPassword: Yup.string().required(required("current password")).min(8, minLength("current password", 8)),
    newPassword: Yup.string().required(required("new password")).min(8, minLength("new password", 8)),
    newPasswordConfirm: Yup.string().oneOf([Yup.ref("newPassword"), null], "new passwords must match!"),
});

const EditPasswordModal = ({ modalsInitialValues, setModalsInitialValues }: Props) => {
    const { user } = useUserContext();
    const { closeLoading, openLoading } = useGeneralContext();

    // form initial values
    const initialValues: InitialValues = {
        currentPassword: "",
        newPassword: "",
        newPasswordConfirm: ""
    }

    // close modal func
    const handleClose = () => {
        setModalsInitialValues({
            ...modalsInitialValues,
            password: false
        })
    }

    // handle form submit
    const handleSubmit = async (values: InitialValues) => {
        if (user) {
            handleClose();
            openLoading();

            await axiosInstance.put("/api/v1/users/edit-password", {
                current_password: values.currentPassword,
                new_password: values.newPassword
            })
                .then(res => {
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
            open={modalsInitialValues.password}
            title='change password'
        >
            <Formik
                initialValues={initialValues}
                validationSchema={FormSchema}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit, handleBlur, handleChange, errors, touched, values, isValid }) => (
                    <form onSubmit={handleSubmit} className='flex flex-col gap-y-6'>

                        {/* inputs */}
                        {
                            inputsData.map((item, index) =>
                                <div className='flex flex-col gap-y-1' key={index * 65}>
                                    <Label label={item.label} required />
                                    <Input
                                        value={values[item.name]}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name={item.name}
                                        type="password"
                                    />
                                    {touched[item.name] && errors[item.name] ? <InputError error={errors[item.name]} /> : null}
                                </div>
                            )
                        }

                        {/* submit password */}
                        <div className='flex justify-end'>
                            <Button
                                variant="contained"
                                type="submit"
                                disabled={isValid}
                            >
                                change password
                            </Button>
                        </div>
                    </form>
                )}
            </Formik>
        </CustomizedModal>
    )
}

export default EditPasswordModal;