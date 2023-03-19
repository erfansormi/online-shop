import React, { createContext, useContext, useEffect, useState } from 'react';
import { parseCookies } from 'nookies';

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
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState("");

    // cookies
    const cookies = parseCookies();

    useEffect(() => {
        setToken({ cookies }.cookies.token);
    }, [token, setToken])

    return (
        <UserContext.Provider value={{ user, setUser, token, setToken }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;