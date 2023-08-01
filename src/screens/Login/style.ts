import styled from 'styled-components/native'
import { SvgXml } from 'react-native-svg';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';

interface ThemeProps{
    theme: typeof theme;
};
export const Container = styled.View`
width: 100%;
flex: 1;

justify-content: space-between;
align-items: center;

background-color:  ${({ theme } : {theme: ThemeProps['theme']}) => theme.colors.primary};

`
export const Header = styled.View`

align-items: center;
gap: 30px;
margin-top: ${RFPercentage(10)}px;
margin-bottom: ${RFPercentage(5)}px;

`

export const ContentGoFinaces = styled.View`
align-items: center;
gap: 5px;

`

export const SvgImagem = styled(SvgXml)`


`
export const TextGoFinances = styled.Text`
font-family: ${({ theme } : {theme: ThemeProps['theme']}) => theme.fonts.medium};
color: ${({ theme } : {theme: ThemeProps['theme']}) => theme.colors.shape};

font-size: ${RFValue(14)}px;
`
export const TextHeader = styled.Text`

color: ${({ theme } : {theme: ThemeProps['theme']}) => theme.colors.shape};
font-family: ${({ theme } : {theme: ThemeProps['theme']}) => theme.fonts.medium};
font-size: ${RFValue(30)}px;

text-align: center;
`
export const LoginContent = styled.View`
background-color: ${({ theme } : {theme: ThemeProps['theme']}) => theme.colors.secondary};
position: relative;

width: 100%;
height: ${RFPercentage(30)}px;

align-items: center;
padding: 24px;


`
export const TextLoginContent = styled.Text`
font-family: ${({ theme } : {theme: ThemeProps['theme']}) => theme.fonts.regular};
color: ${({ theme } : {theme: ThemeProps['theme']}) => theme.colors.shape};
font-size: ${RFValue(16)}px;

text-align: center;
margin-bottom: 20px;


`
export const ButtonsLogin = styled.View`
width: 100%;
gap: 24px;

position: absolute;
bottom:  60%;

`
export const ButtonLogin = styled.TouchableOpacity`

flex-direction: row;
background-color: ${({ theme } : {theme: ThemeProps['theme']}) => theme.colors.background};
height: ${RFValue(56)}px;
border-radius: 8px;
align-items: center;
justify-content: space-between;
padding: 0 90px 0 24px;

`
export const TextButtonLogin = styled.Text`
font-size: ${RFValue(14)}px;
color: ${({ theme } : {theme: ThemeProps['theme']}) => theme.colors.text_dark};

font-family: ${({ theme } : {theme: ThemeProps['theme']}) => theme.fonts.medium};
`
