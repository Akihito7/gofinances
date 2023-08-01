import React from "react";

import {
    Container,
    Header,
    Title,
    Main,
    ListCategory,
    Button,
    ButtonTitle,
    Separator,
} from './style';
import { categories } from "../../utils/categories";
import { Category } from "../../components/CategoryOfCategorySelect";

interface Category{
    key: string;
    name: string;
    icon: string;
}

interface Props{
    category: Category;
    setCategory: (category: Category) => void;
    closeSelectCategory: () => void;

}



export function CategorySelect({category ,setCategory, closeSelectCategory} : Props) {
    return (
        <Container>
            <Header>
                <Title>Categoria</Title>
            </Header>

            <Main>
                <ListCategory
                    data={categories}
                    keyExtractor={(item : Category) => item.key}
                    renderItem={({ item } : {item : Category}) =>  (

                        <Category
                            onPress={() => setCategory(item)}
                            isActive={category.key === item.key}
                            category={item}
                        />
                    )}

                    ItemSeparatorComponent={() => <Separator />}
                />

                <Button onPress={closeSelectCategory}>
                    <ButtonTitle>Selecionar</ButtonTitle>
                </Button>
            </Main>

        </Container>
    )
}
