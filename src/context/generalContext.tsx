import React, { useContext, useState, createContext, useEffect } from 'react';

// types
interface IContext {
    general: IGeneralContext,
    setGeneral: React.Dispatch<React.SetStateAction<IGeneralContext>>,
}

interface IGeneralContext {
    width: number | null,
    loading: boolean,
}

interface Props {
    children: React.ReactNode;
}

// context
const GeneralContext = createContext({} as IContext);
export const useGeneralContext = () => useContext(GeneralContext);

const GeneralContextProvider = ({ children }: Props) => {
    const [general, setGeneral] = useState<IGeneralContext>({
        width: null,
        loading: false
    });

    // functions
    const handleWidth = () => {
        if (typeof window !== "undefined") {
            setGeneral({
                ...general,
                width: window.innerWidth
            })
        }
    }

    // handle page width
    useEffect(() => {
        handleWidth();
        addEventListener("resize", handleWidth);
    }, [])

    return (
        <GeneralContext.Provider value={{ general, setGeneral }}>
            {children}
        </GeneralContext.Provider>
    )
}

export default GeneralContextProvider;