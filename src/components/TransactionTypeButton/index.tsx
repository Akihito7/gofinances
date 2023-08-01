import React from "react";

import {
    Container,
    Title,
    Icon,

} from './style';
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
    type: 'up' | 'down';
    title: string;
    isActived: boolean;
};

const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
};

export function TransactionTypeButton({
    title,
    type,
    isActived,
    ...rest
}: Props) {
    return (
        <Container
         type={type} 
         isActived={isActived}
         {...rest}>
            <Icon type={type} name={icons[type]} />
            <Title>{title}</Title>
        </Container>
    )
}


