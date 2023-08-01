import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../global/styles/theme";

interface ThemeProps {
    theme: typeof theme;
}

export const Container = styled.View`

flex: 1;
background-color: ${({theme} : ThemeProps) => theme.colors.background};

`


export const Header = styled.View`
background-color: ${({ theme } : ThemeProps) => theme.colors.primary};

width: 100%;
height: ${RFValue(113)}px;

align-items: center;
justify-content: flex-end;
padding-bottom: 19px;




`

export const Title = styled.Text`
font-family: ${({ theme } : ThemeProps) => theme.fonts.regular};
font-size:  ${RFValue(18)}px;
color: ${({ theme }: ThemeProps) => theme.colors.shape};

`

export const Form = styled.View`
flex: 1;

width: 100%;
padding: 24px;

justify-content: space-between;
`

export const Fields = styled.View`

`

export const TransacationsButtons = styled.View`
flex-direction: row;
gap: ${RFPercentage(2)}px;
margin: 8px 0 16px 0;

`

export const TransacationContainerTypeButton = styled.View`

width: 48%;

`
export const InputText = styled.TextInput`

background-color: grey;

padding: 16px;
color: white;
font-size:  20px;

`
