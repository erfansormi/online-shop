import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('First Name Is Required'),
    lastName: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Last Name Is Required!'),
    email: Yup.string()
        .email('Invalid Email!')
        .required('Email Is Required!'),
    password: Yup.string()
        .min(8, "Password Is Short!")
        .required("Password Is Required!"),
    confirmPassword: Yup.string()
        .required("Confirm Password Is Required!")
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});