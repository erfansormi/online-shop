// types
export interface LoginInitialValues {
    email: string,
    password: string,
}
type LoginKeys = keyof LoginInitialValues;

// login initial values
export const loginInitialValues: LoginInitialValues = {
    email: "",
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
        name: "email",
        placeholder: "email",
        type: "email"
    },
    {
        name: "password",
        placeholder: "password",
        type: "password"
    }
]