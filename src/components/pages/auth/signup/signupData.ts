import { signupKeys } from "../../../../pages/auth/signup";

// inputs
interface signupInputs {
    name: signupKeys,
    placeholder: string,
    type: React.HTMLInputTypeAttribute
}

export const signupInputs: signupInputs[] = [
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