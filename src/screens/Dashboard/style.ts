import styled from "styled-components/native";
import { FlatList } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Feather } from '@expo/vector-icons'
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import theme from "../../global/styles/theme";
import { DataListProps } from ".";

import { BorderlessButton } from 'react-native-gesture-handler';


interface ThemeProps {
    theme: typeof theme;
}

export const Container = styled.View`

flex: 1;
background-color: ${({ theme }: ThemeProps) => theme.colors.background};

`
export const Header = styled.View`
width: 100%;
height: ${RFPercentage(42)}px;
align-items: center;
//justify-content: center;
margin-top: ${RFValue(28)}px; 

background-color: ${({ theme }: ThemeProps) => theme.colors.primary};

`

export const Loading = styled.View`

flex: 1;
width: 100%;

justify-content: center;
align-items: center;



`

export const UserWrapper = styled.View`

width: 100%;
padding: 0 30px;

flex-direction: row;
justify-content: space-between;
align-items: center;
margin-top: ${getStatusBarHeight() + RFValue(10)}px;

`
export const UserInfo = styled.View`
flex-direction: row;
align-items: center;


`
export const Photo = styled.Image`
width: ${RFValue(55)}px;
height: ${RFValue(55)}px;

border-radius: 10px;
`
export const User = styled.View`
margin-left: 17px;

`
export const UserGreeting = styled.Text`
color: ${({ theme }: ThemeProps) => theme.colors.shape};

font-size: ${RFValue(16)}px;;
font-family: ${({ theme }: ThemeProps) => theme.fonts.regular};
`
export const UserName = styled.Text`
color: ${({ theme }: ThemeProps) => theme.colors.shape};

font-size: ${RFValue(16)}px;
font-family: ${({ theme }: ThemeProps) => theme.fonts.bold};


`
export const Icon = styled(Feather)`

color: ${({ theme }: ThemeProps) => theme.colors.secondary};
font-size: ${RFValue(24)}px;
`

export const HighLightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 14 }
})`
position: absolute;
margin-top: ${RFPercentage(22)}px;


`;

export const Transactions = styled.View`
flex: 1;
padding: 0 30px;

margin-top:  ${RFPercentage(9)}px;

`

export const Title = styled.Text`

font-size: ${RFValue(18)}px;
font-family: ${({ theme }: ThemeProps) => theme.fonts.regular};

margin-bottom: 16px;

`

export const ListTransaction = styled
(FlatList as new () => FlatList<DataListProps>
).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        paddingBottom: getBottomSpace()
    }
})`



`

export const ButtonPower = styled.TouchableOpacity`


`