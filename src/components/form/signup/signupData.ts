// types
export interface SignupInitialValues {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
}
type SignupKeys = keyof SignupInitialValues;

// signup initial values
export const signupInitialValues: SignupInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
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
        name: "email",
        placeholder: "email",
        type: "email"
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