import React from 'react'

// formik & yup
import { Formik } from 'formik'
import * as Yup from 'yup';

// mui
import { Button, Box } from '@mui/material'

// components
import FormContainer from '../../../components/form/formContainer/formContainer';
import Input from '../../../components/form/input/input';
import InputError from '../../../components/form/input/inputError';

// validation
const Schema = Yup.object().shape({
    user: Yup.string()
        .min(5, "To short!")
        .required('Email, phone number or username is required!'),
});

const RestPassword = () => {
    // types
    interface InitialValues {
        user: string
    }
    const initialValues: InitialValues = {
        user: ""
    }

    // handle form submit 
    const handleSubmit = (values: InitialValues) => {

    }

    return (
        <FormContainer title='forget password'>
            <Formik
                initialValues={initialValues}
                validationSchema={Schema}
                onSubmit={handleSubmit}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit}
                    >
                        <div className="mb-1 w-full h-16">
                            <Input
                                placeholder={"Enter your email or phone number"}
                                name={"user"}
                                type={"text"}
                                value={values.user}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.user}
                                touched={touched.user}
                            />
                            {
                                errors.user && touched.user ?
                                    <InputError error={errors.user} />
                                    : null
                            }
                        </div>
                        <div className="mb-3 w-full">
                            <Button
                                type='submit'
                                className="w-full h-10 rounded-md"
                                variant={"contained"}
                            >
                                next
                            </Button>
                        </div>
                    </Box>
                )}
            </Formik>
            {/* <Loading loading={loading} /> */}
        </FormContainer>
    )
}

export default RestPassword