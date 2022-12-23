// types
export interface LoginInitialValues {
    user: string,
    password: string,
}
type LoginKeys = keyof LoginInitialValues;

// login initial values
export const loginInitialValues: LoginInitialValues = {
    user: "",
    password: "",
}

// inputs
interface LoginInputs {
    name: LoginKeys,
    placeholder: string,
    type: React.HTMLInputTypeAttribute
}

export const loginInputs: LoginInputs[] = [
    {
        name: "user",
        placeholder: "Enter your email, phone number or username",
        type: "text"
    },
    {
        name: "password",
        placeholder: "Password",
        type: "password"
    }
]