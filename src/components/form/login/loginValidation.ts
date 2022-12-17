import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid Email!')
        .required('Email Is Required!'),
    password: Yup.string()
        .min(8, "Password Is Short!")
        .required("Password Is Required!"),
});