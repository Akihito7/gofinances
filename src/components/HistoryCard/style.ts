import styled from "styled-components/native";
import theme from "../../global/styles/theme";
import { RFValue } from "react-native-responsive-fontsize";

interface Props{
    theme: typeof theme;
}

export const Container = styled.View`

width: 100%;

background-color: ${({theme} : {theme: Props['theme']}) => theme.colors.shape};
flex-direction: row;
justify-content: space-between;
align-items: center;

padding: 13px 24px;

border-radius: 5px;
border-left-width: 5px;
border-left-color: ${({color} : {color: string}) => color};
margin-bottom: 8px;
`
export const Title = styled.Text`
font-family: ${({ theme } : {theme: Props['theme']}) => theme.fonts.regular};
font-size: ${RFValue(15)}px;
`
export const Amount = styled.Text`
font-family: ${({ theme } : {theme: Props['theme']}) => theme.fonts.bold};
font-size: ${RFValue(18)}px;
`
