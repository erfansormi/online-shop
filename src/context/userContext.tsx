import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { axiosInstance } from '../functions/axiosInstance';

// react toastify
import { toastify } from '../components/utils/toastify/toastifyFunc';

// types
import { User } from '../types/user/userTypes';

interface IUserContext {
    user: User | null,
    setUser: React.Dispatch<React.SetStateAction<User | null>>,
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
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
    const [loading, setLoading] = useState(true);

    const getUser = async () => {
        setLoading(true);

        await axiosInstance.get("/api/v1/users/me")
            .then(res => {
                setUser(res.data);
            })
            .catch(() => {
                setUser(null);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    useEffect(() => {
        getUser();
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser, loading, setLoading }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;