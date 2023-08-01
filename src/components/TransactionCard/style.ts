import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../global/styles/theme";
import { Feather } from "@expo/vector-icons";

interface PropsType{
    theme: typeof theme;
    type: 'positive' | 'negative'
}

export const Container = styled.View`
background-color: ${({theme} : PropsType) => theme.colors.shape};
border-radius: 5px;

padding: 17px 24px;

margin-bottom: 16px;

`
export const Title = styled.Text`
font-family:  ${({theme} : PropsType) => theme.fonts.regular};
font-size: ${RFValue(14)}px;


`
export const Amount = styled.Text`

color: ${({ theme, type } : PropsType) => type === 'positive' ? theme.colors.sucess : theme.colors.attention  };
font-size: ${RFValue(20)}px;
margin-top: 2px;
`
export const Footer = styled.View`

flex-direction: row;
justify-content: space-between;
align-items: center;

margin-top: 19px;

`
export const Category = styled.View`

flex-direction: row;
align-items: center;
gap: 10px;

`
export const Icon = styled(Feather)`

font-size: ${RFValue(20)}px;
color: ${({ theme } : PropsType) => theme.colors.text};


`
export const CategoryName = styled.Text`

font-size: ${RFValue(14)}px;
color: ${({ theme } : PropsType) => theme.colors.text};

`
export const Date = styled.Text`

color: ${({ theme } : PropsType) => theme.colors.text};

`