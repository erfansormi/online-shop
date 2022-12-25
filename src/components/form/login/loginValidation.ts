import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    user: Yup.string()
        .min(5, "To short!")
        .required('Username, email or phone number is required!'),
    password: Yup.string()
        .min(8, "Password is short!")
        .required("Password is required!"),
});

export const PhoneLoginSchema = Yup.object().shape({
    phone: Yup.string()
        .matches(/^09[0-9]{9}$/, "Phone number is not valid!")
        .required('Phone number is required!'),
});
