import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

import theme from "../../global/styles/theme";

interface PropsButton {
    isActived: boolean;
    type: 'up' | 'down';
    theme: typeof theme;
}

export const Container = styled.TouchableOpacity`
width:  100%;
flex-direction: row;
align-items: center;
justify-content: center;

padding: 16px;
gap: 10px;

border: 1px solid ${({ theme } : {theme: PropsButton['theme']}) => theme.colors.text};
border-radius: 5px;

${({ isActived } : {isActived : PropsButton['isActived']}) => isActived && css`

border: 0px;

`}


${({type, isActived } : {type: PropsButton['type'],
 isActived: PropsButton['isActived']
 }) => isActived && type === 'up' && css`

background-color: ${({ theme }) => theme.colors.sucess_light} ;
`}


${({type, isActived } : {type: PropsButton['type'],
isActived: PropsButton['isActived']
}) => isActived && type === 'down' && css`

background-color: ${({ theme }) => theme.colors.attention_light} ;
`}

`

export const Title = styled.Text`

font-size:  ${RFValue(16)}px;
color: ${({ theme } : {theme: PropsButton['theme']}) => theme.colors.text_dark};


`

export const Icon = styled(Feather)`

font-size:  ${RFValue(24)}px;
color: ${({ theme, type } : {theme: PropsButton['theme'],
type: PropsButton['type']
}) => type === 'up' ? theme.colors.sucess : theme.colors.attention};

`