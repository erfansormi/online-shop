import { User } from "../../../../types/user/userTypes"

// ts
export interface InitialPersonalInfoModal {
    name: boolean,
    email: boolean,
    password: boolean,
    birthDate: boolean
}
interface PersonalInfoData {
    title: string,
    value: string,
    name: keyof InitialPersonalInfoModal
}

export const personalInfoData: (user: User) => PersonalInfoData[] = (user: User) => {
    return [
        {
            title: "name and surname",
            value: `${user.first_name} ${user.last_name}`,
            name: "name"
        },
        {
            title: "email",
            value: `${user.email}`,
            name: "email"
        },
        {
            title: "password",
            value: `•••••••`,
            name: "password"
        },
        {
            title: "birth date",
            value: `${user.birth_date ? new Date(user.birth_date).toLocaleDateString() : "not registered"}`,
            name: "birthDate"
        },
    ]
}