import React from "react";

import {
    Container,
    Title,
    Icon,
}
    from "./style";
import { TouchableOpacityProps } from "react-native";

interface CategoryProps {
    key: string;
    name: string;
    icon: string;

}

interface Props  extends TouchableOpacityProps{
    category: CategoryProps;
    isActive: boolean;

}
export function Category({
    category,
    isActive,
    ...rest
}: Props) {
    return (
        <Container
         isActive={isActive}
         {...rest}
         >
            <Icon name={category.icon} />
            <Title>{category.name}</Title>
        </Container>
    )
}