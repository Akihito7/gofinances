import React from "react";
import { Image } from "react-native-svg";

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

} from './style';

import { Finance } from "../../assets/Finance";
import { Google } from "../../assets/Google";
import { Apple } from "../../assets/Apple";

export function Login() {

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
                    <ButtonLogin activeOpacity={.7}>
                    <SvgImagem xml={Google} width={25} height={25} />
                        <TextButtonLogin>Entrar com google</TextButtonLogin>
                    </ButtonLogin>

                    <ButtonLogin activeOpacity={.7}>
                        <SvgImagem xml={Apple} width={25} height={25} />
                        <TextButtonLogin>Entrar com Apple  </TextButtonLogin>

                    </ButtonLogin>
                </ButtonsLogin>
            </LoginContent>


        </Container>
    )
}