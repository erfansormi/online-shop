import * as Yup from 'yup';

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
        .email("Invalid email!"),
    phone: Yup.string()
        .matches(/^09[0-9]{9}$/, "Phone number is not valid!")
        .required('Phone number is required!'),
    password: Yup.string()
        .min(8, "Password is short!")
        .required("Password is required!"),
    confirmPassword: Yup.string()
        .required("Confirm Password is required!")
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});