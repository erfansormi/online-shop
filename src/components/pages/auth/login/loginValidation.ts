import * as Yup from 'yup';
import { emailRegex } from '../../../../functions/validation';

export const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .matches(emailRegex, "invalid email!")
        .required('email is required!'),
    password: Yup.string()
        .min(8, "password can't less than 8 character!")
        .required("Password is required!"),
});
