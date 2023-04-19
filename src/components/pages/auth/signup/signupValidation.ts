import * as Yup from 'yup';
import { emailRegex } from '../../../../functions/validation';

export const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, 'Too short!')
        .max(50, 'Too long!')
        .required('First name is required!'),
    lastName: Yup.string()
        .min(3, 'Too short!')
        .max(50, 'Too long!')
        .required('Last name is required!'),
    email: Yup.string()
        .required("Email is required!")
        .matches(emailRegex, "invalid email!"),
    password: Yup.string()
        .min(8, "Password is short!")
        .required("Password is required!"),
    confirmPassword: Yup.string()
        .required("Confirm Password is required!")
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});