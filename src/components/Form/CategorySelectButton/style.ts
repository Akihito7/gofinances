import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../../global/styles/theme';

interface Props{
    theme: typeof theme;
}
export const Container = styled.TouchableOpacity`

width: 100%;
background-color: ${({ theme } : {theme : Props['theme']}) => theme.colors.shape};
padding: 18px 16px;
border-radius: 5px;

flex-direction: row;
align-items: center;
justify-content: space-between;
`

export const Title = styled.Text`

font-size: ${RFValue(14)}px;
color: ${({ theme } : {theme: Props['theme']}) => theme.colors.text}

`

export const Icon = styled(Feather)`

font-size: ${RFValue(20)}px;
color: ${({ theme } : {theme: Props['theme']}) => theme.colors.text}


`