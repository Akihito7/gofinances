import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`

width: 100%;

`

export const Error = styled.Text`


color: red;
font-size: ${RFValue(14)}px;
margin: 8px 0;

`