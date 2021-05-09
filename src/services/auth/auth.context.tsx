import React, { createContext, useState, useEffect } from "react";
import { loginRequest } from "./auth.service";
import { User } from "@firebase/auth-types";

interface AuthContextProps {
    isLoading?: boolean;
    user?: User | {};
    isAuthenticated?: boolean;
    error: string;
    onLogin: (email: string, password: string) => void;
}

// @ts-ignore
export const AuthContext = createContext<AuthContextProps>({});

interface AuthContextProviderProps {
    children: React.ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
    children,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState<User | {}>({});
    const [error, setError] = useState("");
    const [isAuth, setIsAuth] = useState(false);

    const onLogin = (email: string, password: string) => {
        setIsLoading(true);
        setError("");

        loginRequest(email, password)
            .then((u: any) => {
                setIsAuth(true);
                setUser(u);
                setIsLoading(false);
            })
            .catch((e: any) => {
                setIsAuth(false);
                setError(e.toString());
                setIsLoading(false);
            });
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                isLoading,
                isAuthenticated: isAuth,
                error,
                onLogin,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
