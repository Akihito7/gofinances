import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { FlatList } from 'react-native';
import theme from '../../global/styles/theme';


type theme = typeof theme;

export const Container = styled.View`
flex: 1;
width: 100%;
background-color: ${({ theme} :{theme: theme}) => theme.colors.background};

`

export const Header = styled.View`

height: ${RFValue(87)}px;
background-color: ${({ theme} :{theme: theme}) => theme.colors.primary};

align-items: center;
justify-content: flex-end;

padding-bottom: 19px;
`

export const Title = styled.Text`

color: ${({ theme} :{theme: theme})=> theme.colors.shape};

font-family: ${({ theme} :{theme: theme}) => theme.fonts.regular};
font-size:  ${RFValue(18)}px;

`
export const Main = styled.View`
flex: 1;

justify-content: space-between;
padding: 0 16px;

margin-top: ${RFPercentage(10)}px;
`

export const ListCategory = styled(FlatList)`

width: 100%;


`

export const Button = styled.TouchableOpacity`

background-color: ${({ theme} :{theme: theme}) => theme.colors.secondary};

border-radius: 5px;
padding: 16px;

align-items: center;
justify-content: center;

`
export const ButtonTitle = styled.Text`

font-family: ${({ theme} :{theme: theme}) => theme.fonts.medium};
font-size:  ${RFValue(18)}px;

color: ${({ theme} :{theme: theme}) => theme.colors.shape};

`

export const Separator = styled.View`
width: 100%;
height: 1.1px;

background-color: ${({ theme} :{theme: theme}) => theme.colors.text};
`