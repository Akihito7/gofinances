import React from "react";

import { NavigationContainer } from '@react-navigation/native'

import { AppRoutes } from "./App.Routes";
import { useAuth } from "../hooks/Auth";
import { AuthRoutes } from "./Auth.Routes";



export function Routes() {

  const { user } = useAuth();

    return (
        <NavigationContainer>
        {
          user.name ? <AppRoutes /> : <AuthRoutes />
        }
  
        </NavigationContainer>
    )
}