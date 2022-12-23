import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    user: Yup.string()
        .min(5, "To short!")
        .required('Email, phone number or username is required!'),
    password: Yup.string()
        .min(8, "Password is short!")
        .required("Password is required!"),
});