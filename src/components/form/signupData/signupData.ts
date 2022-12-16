import { SignupKeys } from "../../../pages/signup"

interface Signup {
    name: SignupKeys,
    placeholder: string,
    type: React.HTMLInputTypeAttribute
}

export const signupData: Signup[] = [
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