import React, { createContext, useState, useEffect } from "react";
import { loginRequest } from "./auth.service";
import { User } from "@firebase/auth-types";

interface AuthContextProps {
    isLoading?: boolean;
    user?: User | {};
    isAuthenticated?: boolean;
    error?: string;
    onLogin?: (email: string, password: string) => void;
}

export const AuthContext = createContext<AuthContextProps>({});

interface AuthContextProviderProps {
    children: React.ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
    children,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState<User | {}>({});
    const [error, setError] = useState("null");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const onLogin = (email: string, password: string) => {
        setIsLoading(true);
        loginRequest(email, password)
            .then((u) => {
                setUser(u);
                setIsAuthenticated(true);
                setIsLoading(false);
            })
            .catch((e) => {
                setIsAuthenticated(false);
                setError(e);
                setIsLoading(false);
            });
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isLoading,
                isAuthenticated,
                error,
                onLogin,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
