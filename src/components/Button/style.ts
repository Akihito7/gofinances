import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import theme from "../../global/styles/theme";
import { type } from "os";


interface ThemeProps{
theme: typeof theme;
}

type themes = typeof theme;

//maneira certa de desestrutar o theme do themeProvider e tipar é está background-color: ${({ theme } : {theme : themes}) => theme.colors.secondary}; // da outra maneira nós não estamos tipando o objeto theme e sim desestrutrando ele da interface, mas isso so funciona porque noss theme ja tem valores definidos se fosse apenas a tipagem ele não funcionaria ja que estaria null as propriedas

export const Container = styled.TouchableOpacity`

width: 100%;
background-color: ${({ theme } : {theme : themes}) => theme.colors.secondary};

border-radius: 5px;
align-items: center;

`

export const Title = styled.Text`

font-family: ${({ theme } : {theme :ThemeProps['theme']}) => theme.fonts.medium};
font-size: ${RFValue(14)}px;

color: ${({ theme } : ThemeProps) => theme.colors.shape};

padding: 18px;

`