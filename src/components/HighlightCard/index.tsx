import React from "react";
import {
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransaction
} from './style'


interface HighLightProps{
    title: string;
    type: 'up' | 'down' | 'total';
    amount: string;
    lastTransaction: string;
}

const typeIcons = {
     up:'arrow-up-circle',
     down: 'arrow-down-circle',
     total: 'dollar-sign'
}

export function HighLightCard({title,type,amount,lastTransaction} : HighLightProps){
    return (
        <Container type={type}>
            <Header>
                <Title type={type}>{title}</Title>
                <Icon
                name={typeIcons[type]}
                type={type}/>
            </Header>

            <Footer>
                <Amount type={type}>{amount}</Amount>
                <LastTransaction type={type}>{lastTransaction}</LastTransaction>
            </Footer>
        </Container>
    )
}