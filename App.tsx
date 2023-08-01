import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import { Login } from './src/screens/Login';


import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';
import { Routes } from './src/Routes';
import { AuthProvider } from './src/hooks/Auth';



export default function App() {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontLoaded) return <AppLoading />

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>

    </ThemeProvider>
  );
};


