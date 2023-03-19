import React, { createContext, useContext, useState } from 'react';

// types
import { User } from '../types/user/userTypes';

interface IUserContext {
    user: User | null,
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}

interface Props {
    children: React.ReactNode;
}

//context
const UserContext = createContext({} as IUserContext);
export const useUserContext = () => useContext(UserContext);

const UserContextProvider = ({ children }: Props) => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;