import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../global/styles/theme";
import { Feather } from "@expo/vector-icons";

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

export const Content = styled.ScrollView`


`

export const PizzaGraphic = styled.View`

align-items: center;
justify-content: center;
`

export const Months = styled.View`
width: 100%;
justify-content: space-between;
align-items: center;
flex-direction: row;


margin-top: 20px;
padding: 0 24px;
`

export const Loading = styled.View`

width: 100%;
flex: 1;
align-items: center;
justify-content: center;
`
export const Icon = styled(Feather)`

font-size: ${RFValue(40)}px;

`
export const MonthCurrent = styled.View`

`
export const MonthText = styled.Text`

font-size: ${RFValue(20)}px;
`

export const ButtonMonth = styled.TouchableOpacity`



`