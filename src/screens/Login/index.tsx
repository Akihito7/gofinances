import React, { useState } from "react";
import { Image } from "react-native-svg";
import { ActivityIndicator } from "react-native";
import { Platform } from "react-native";

import {
    Container,
    Header,
    ContentGoFinaces,
    SvgImagem,
    TextGoFinances,
    TextHeader,
    LoginContent,
    TextLoginContent,
    ButtonsLogin,
    ButtonLogin,
    TextButtonLogin,
    Loading

} from './style';

import { Finance } from "../../assets/Finance";
import { Google } from "../../assets/Google";
import { Apple } from "../../assets/Apple";
import { useAuth } from "../../hooks/Auth";
import { useTheme } from "styled-components";

export function Login() {

    const { signWithGoogle } = useAuth();
    const theme = useTheme();

    const [isLoading, setIsLoading] = useState(false);

    async function handleSignWithGoogle(){

        try {
            setIsLoading(true);
            signWithGoogle();
            
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    return (
        <Container>
            <Header>
                <ContentGoFinaces>

                    <SvgImagem xml={Finance} width={35} height={35} />
                    <TextGoFinances>gofinances</TextGoFinances>
                </ContentGoFinaces>

                <TextHeader>
                   Controle suas finanças de forma muito simples
                </TextHeader>

                <TextLoginContent>Faça seu login com {'\n'}uma das opções abaixo</TextLoginContent>
            </Header>

            <LoginContent>

                <ButtonsLogin>
                    <ButtonLogin activeOpacity={.7}  onPress={handleSignWithGoogle}>
                    <SvgImagem xml={Google} width={25} height={25} />
                        <TextButtonLogin>Entrar com google</TextButtonLogin>
                    </ButtonLogin>

                    {   Platform.OS === 'ios' &&
                        <ButtonLogin activeOpacity={.7}>
                        <SvgImagem xml={Apple} width={25} height={25} />
                        <TextButtonLogin>Entrar com Apple  </TextButtonLogin>
                    </ButtonLogin>}
                </ButtonsLogin>
            </LoginContent>
            {

                isLoading && 
                <Loading>
                    <ActivityIndicator color={theme.colors.primary} size={30} />
                </Loading>
            }



        </Container>
    )
}