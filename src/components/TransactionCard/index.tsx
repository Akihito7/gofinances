import React from "react";
import {
    Container,
    Title,
    Amount,
    Footer,
    Category,
    Icon,
    CategoryName,
    Date,
} from './style'
import { categories } from "../../utils/categories";

interface Category {
    id: string;
    name: string;
    icon: string;
};

export interface TransactionCardProps {
    type: 'positive' | 'negative'
    name: string;
    amount: string;
    category: string;
    date: string;
};

interface Props{

    data: TransactionCardProps;
}

export function TransactionCard({data} : Props){
     const [categoryUtil] = categories.filter(item => item.key ===  data.category)


    return(
        
        <Container>
           <Title>{data.name}</Title>

           <Amount type={data.type}>
            {data.type === 'negative' && '- '}
            {data.amount}
            
            </Amount>

           <Footer>
            <Category>
                <Icon name={categoryUtil.icon} />
                <CategoryName>{categoryUtil.name}</CategoryName>
            </Category>
            <Date>{data.date}</Date>
           </Footer>
        </Container>
    )
}