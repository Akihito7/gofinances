import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import * as AuthSessions from 'expo-auth-session'
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({} as AuthContextData);


interface UserProps {
    id: string;
    name: string;
    email: string;
    photo: string;
};

interface AuthContextData{
    user: UserProps;
    signWithGoogle(): Promise<void>;
    logout(): Promise<void>;
    userIsLoading: boolean;

}

interface AuthorizationResponse{
    params: {
        access_token: string;
    };

    type: string;
}

interface AuthProviderProps {
    children: ReactNode;
}



function AuthProvider({ children }: AuthProviderProps) {
    
    const [user, setUser] = useState<UserProps>({} as UserProps);
    const [userIsLoading, setUserIsLoading] = useState(true);

    const userAsyncStorage = "@gofinances:user"
    
    async function signWithGoogle() {
        try {
    
            const CLIENT_ID = '100938525844-muol2b1tli4dmv9qcqpegofcgrrkfbt2.apps.googleusercontent.com';
            const REDIRECT_URI = 'https://auth.expo.io/@akihito7/gofinances';
            const RESPONSE_TYPE = 'token';
            const SCOPE = encodeURI('profile email');
    
            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
    
            const {type, params} = await AuthSessions.
            startAsync({ authUrl }) as AuthorizationResponse;
    
            
    
            if(type === 'success'){
                const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`)
    
                const {id, email, given_name, picture} = await response.json();

                const user = {
                    id,
                    email,
                    name: given_name,
                    photo: picture
                }
    
                setUser(user);

                await AsyncStorage.setItem(userAsyncStorage, JSON.stringify(user));

            }
          
        } catch (error) {
            console.log(error)
            throw new Error(error);
        };


    }

    async function loadUserAsyncStorage(){
        const userData = await AsyncStorage.getItem(userAsyncStorage);
        const userFormated = userData ? JSON.parse(userData) : {};

        //console.log(userFormated);

        setUser(userFormated);

        setUserIsLoading(false);
    }

    async function logout(){
        await AsyncStorage.removeItem(userAsyncStorage);
        setUser({} as UserProps);

    };

    useEffect(() => {
        loadUserAsyncStorage();

    },[])

    return (
        <AuthContext.Provider value={{
            user,
            signWithGoogle,
            userIsLoading,
            logout     
        }}>
            {children}
        </AuthContext.Provider>
    )
};

function useAuth() {
    const data = useContext(AuthContext);
    return data;
};


export { AuthProvider, useAuth }

