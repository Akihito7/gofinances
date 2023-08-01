import React, { Children, ReactNode, createContext, useContext } from "react";

export const AuthContext = createContext<UserProps>({
    id: '',
    name: '',
    email: ''
});


interface UserProps{
    id: string;
    name: string;
    email: string;
};

interface Props{
    children: ReactNode;
}


function AuthProvider({children} : Props){
    
    
    const dataUser = {
        id: '1',
        name: 'Guilherme Akihito',
        email: 'akihitoPro7@gmail.com'
      }
    return(
    <AuthContext.Provider value={dataUser}>
        {children}
    </AuthContext.Provider>
    )
};

function useAuth(){
    const data : UserProps = useContext(AuthContext);
    return data;
};


export {AuthProvider, useAuth}

