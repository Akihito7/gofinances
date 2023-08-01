import React from "react";

import {

    Container,
    Title,
    Icon,
} from './style';
import { TouchableHighlightProps } from "react-native";

interface CategoryProps{
key: string;
name: string;
icon: string;
}
interface Props extends TouchableHighlightProps{
    category: CategoryProps;
}

export function CategorySelectButton({category, ...rest} : Props) {
    return (
        <Container {...rest}>
            <Title>{category.name}</Title>
            <Icon name='chevron-down' />
        </Container>

    )
}