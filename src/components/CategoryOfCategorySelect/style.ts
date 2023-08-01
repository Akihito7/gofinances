import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import theme from "../../global/styles/theme";

type PropsIsActive = boolean;
type theme = typeof theme;

export const Container = styled.TouchableOpacity`

width: 100%;
height: ${RFValue(50)}px;
flex-direction: row;
align-items: center;

padding: 0 16px ;
gap: 10px;
border-radius: 5px;


${({ theme, isActive } : {theme: theme, isActive: PropsIsActive}) => isActive && css`

background-color: ${theme.colors.attention_light};
`}


`

export const Title = styled.Text`

font-size: ${RFValue(14)}px;
font-family: ${({ theme } : {theme: theme}) => theme.fonts.regular};
`

export const Icon = styled(Feather)`

font-size: ${RFValue(20)}px;
`

