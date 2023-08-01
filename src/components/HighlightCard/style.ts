import styled, {css} from "styled-components/native";

import {RFValue} from 'react-native-responsive-fontsize'
import { Feather } from "@expo/vector-icons";
import theme from "../../global/styles/theme";


interface TypeProps {
    type: 'up' | 'down' | 'total';
    theme: typeof theme;

};


export const Container = styled.View`
background-color: ${({theme,type} : TypeProps) => type === 'total' ? theme.colors.secondary : theme.colors.shape};
margin-left: 16px;

width: ${RFValue(280)}px;
border-radius: 5px;

padding: 19px 23px;
padding-bottom: ${RFValue(42)}px;
`;

export const Header = styled.View`
flex-direction: row;
justify-content: space-between;

`;

export const Title = styled.Text`
font-family: ${({ theme } : TypeProps) => theme.fonts.regular};
font-size: ${RFValue(14)}px;

color: ${({ theme, type } : TypeProps) => type === 'total' ? theme.colors.shape : theme.colors.text_dark};



`;

export const Icon = styled(Feather)<TypeProps>`

font-size: ${RFValue(40)}px;

${({ type } : TypeProps) => type === 'up' && css`
color:  ${({theme}) => theme.colors.sucess}`};

${({ type } : TypeProps) => type === 'down' && css`
color:  ${({theme}) => theme.colors.attention}`};

${({ type } : TypeProps) => type === 'total' && css`
color:  ${({theme}) => theme.colors.shape}`};

`;

export const Footer = styled.View``

export const Amount = styled.Text`
font-family: ${({ theme } : TypeProps) => theme.fonts.medium};
font-size: ${RFValue(32)}px;

color: ${({ theme, type } : TypeProps) => type === 'total' ? theme.colors.shape : theme.colors.text_dark};
margin-top: 38px;
`;

export const LastTransaction = styled.Text`
font-family: ${({ theme } : TypeProps) => theme.fonts.regular};
font-size: ${RFValue(12)}px;

color: ${({ theme, type }: TypeProps) => type === 'total' ? theme.colors.shape : theme.colors.text};
`;