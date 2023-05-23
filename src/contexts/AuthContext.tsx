import { createContext, ReactNode, useState } from "react";

export type AuthContextDataProps = {
    isAuthenticated: boolean;
    handleSetAuthenticated: (value: boolean) => void
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const handleSetAuthenticated = (value: boolean) => {
        setIsAuthenticated(value);
    };

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            handleSetAuthenticated
        }}>
            {children}
        </AuthContext.Provider>
    )
}