import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../../global/styles/theme";

type ThemeProps = typeof theme;

export const Container = styled.TextInput`

width: 100%;
padding:  16px 18px;

font-size:  ${RFValue(14)}px;

background-color: ${({theme} : {theme:ThemeProps}) => theme.colors.shape};
border-radius: 5px;

margin-bottom: 10px;

`