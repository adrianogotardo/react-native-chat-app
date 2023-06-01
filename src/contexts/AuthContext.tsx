import { ReactNode, createContext, useState } from "react";
import { UserDTO } from "../dtos/UserDTO";

export type AuthContextDataProps = {
    user: UserDTO;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState({
        user: {
          id: '1',
          name: 'Adriano',
          email: 'adriano@gmail.com'
        }
    });

    return(
        <AuthContext.Provider value ={user}>
            { children }
        </AuthContext.Provider>
    )
}