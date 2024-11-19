import React, { createContext, useContext, useState } from 'react'

import Scan from '@/app/pages/scan';
import Brieven from '@/app/pages/brieven';
import Rekeningen from '@/app/pages/rekeningen';
import ContentPage from '@/components/ContentPage';

type navigationContextProviderProps = {
    children: React.ReactNode;
}

type navigationContext = {
    currentPage: string;
    setCurrentPage: React.Dispatch<React.SetStateAction<string>>;

    renderPage: () => React.JSX.Element;
}

export const NavigationContext = createContext<navigationContext | null>(null);

export default function NavigationContextProvider(props : navigationContextProviderProps) {
    const [currentPage, setCurrentPage] = useState('Scan');

    const renderPage = () => {
        switch(currentPage){
            case 'Scan':
                return <Scan />
            case 'Rekeningen':
                return <ContentPage content={ <Rekeningen/> } />
            case 'Brieven':
                return <ContentPage content={ <Brieven /> } />
            default:
                return <Scan />
        }
    }

    return (
        <NavigationContext.Provider
            value={{
                currentPage,
                setCurrentPage,

                renderPage
            }}
        >
            {props.children}
        </NavigationContext.Provider>
    )
}

export function useNavigationContext() {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error(
            "useScrollContext must be called within a \'ScrollContextProvider\'"
        );
    }
    
    return context;
}
