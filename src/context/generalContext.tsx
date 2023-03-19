import React, { useContext, useState, createContext, useEffect } from 'react';

// types
interface IGeneralContext {
    width: number | null,
}

interface Props {
    children: React.ReactNode;
}

// context
const GeneralContext = createContext({} as IGeneralContext);
export const useGeneralContext = () => useContext(GeneralContext);

const GeneralContextProvider = ({ children }: Props) => {
    const [general, setGeneral] = useState<IGeneralContext>({
        width: null,
    });

    // functions
    const handleWidth = () => {
        if (typeof window !== "undefined") {
            setGeneral({ width: window.innerWidth })
        }
    }

    // handle page width
    useEffect(() => {
        handleWidth();
        addEventListener("resize", handleWidth);
    }, [])

    return (
        <GeneralContext.Provider value={general}>
            {children}
        </GeneralContext.Provider>
    )
}

export default GeneralContextProvider;