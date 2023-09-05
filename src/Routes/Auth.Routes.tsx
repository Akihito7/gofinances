import React from "react";

import { createStackNavigator} from '@react-navigation/stack'

import { Login } from "../screens/Login";

export function AuthRoutes(){

    const {Navigator, Screen} = createStackNavigator();

    return(
         <Navigator screenOptions={{ headerShown: false }} >
            <Screen name="login" component={Login}/>
         </Navigator>
    )
}