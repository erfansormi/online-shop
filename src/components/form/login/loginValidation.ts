import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email!')
        .required('Email is required!'),
    password: Yup.string()
        .min(8, "Password is short!")
        .required("Password is required!"),
});