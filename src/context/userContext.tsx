import React, { createContext, useContext, useEffect, useState } from 'react';
import { axiosInstance } from '../functions/axiosInstance';

// types
import { User } from '../types/user/userTypes';

interface IUserContext {
    user: User | null,
    setUser: React.Dispatch<React.SetStateAction<User | null>>,
    token: string,
    setToken: React.Dispatch<React.SetStateAction<string>>
}

interface Props {
    children: React.ReactNode;
}

//context
const UserContext = createContext({} as IUserContext);
export const useUserContext = () => useContext(UserContext);

const UserContextProvider = ({ children }: Props) => {
    // states
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState("");

    const getUser = async () => {
        await axiosInstance.get("/api/v1/users/me")
            .then(res => {
                setUser(res.data)
            })
            .catch(err => {
                setToken("")
                console.log(err);
            })
    }

    useEffect(() => {
        getUser();
    }, [token, setToken])

    return (
        <UserContext.Provider value={{ user, setUser, token, setToken }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;