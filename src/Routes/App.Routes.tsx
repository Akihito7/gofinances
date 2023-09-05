import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";
import { Dashboard } from "../screens/Dashboard";
import { Register } from "../screens/Register";
import { Resume } from "../screens/Resume";


const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    const theme = useTheme();

    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarInactiveTintColor: `${theme.colors.text}`,
            tabBarActiveTintColor: `${theme.colors.secondary}`,

            tabBarLabelPosition: "beside-icon",
            tabBarStyle: {
                height: 50,
                paddingBottom: 5,

            }


        }}>
            <Screen
                name='Listagem'
                component={Dashboard}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons
                            color={color}
                            size={size}
                            name="format-list-bulleted"
                        />
                    )
                }}
            />
            <Screen
                name='Cadastrar'
                component={Register}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            color={color}
                            size={size}
                            name="attach-money" />
                    )
                }}
            />
            <Screen
                name='Resumo'
                component={Resume}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            color={color}
                            size={size}
                            name="pie-chart" />
                    )
                }}
            />
        </Navigator>
    )
}

