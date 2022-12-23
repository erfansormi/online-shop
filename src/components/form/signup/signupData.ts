// types
export interface SignupInitialValues {
    firstName: string,
    lastName: string,
    phone: string,
    password: string,
    confirmPassword: string
}
type SignupKeys = keyof SignupInitialValues;

// signup initial values
export const signupInitialValues: SignupInitialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    confirmPassword: ""
}

// inputs
interface SignupInputs {
    name: SignupKeys,
    placeholder: string,
    type: React.HTMLInputTypeAttribute
}

export const signupInputs: SignupInputs[] = [
    {
        name: "firstName",
        placeholder: "first name",
        type: "text"
    },
    {
        name: "lastName",
        placeholder: "last name",
        type: "text"
    },
    {
        name: "phone",
        placeholder: "phone number",
        type: "text"
    },
    {
        name: "password",
        placeholder: "password",
        type: "password"
    },
    {
        name: "confirmPassword",
        placeholder: "confirm password",
        type: "password"
    },
]