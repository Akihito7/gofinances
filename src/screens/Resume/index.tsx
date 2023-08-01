import React, { useCallback, useEffect, useState } from "react";
import { HistoryCard } from "../../components/HistoryCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { VictoryPie } from 'victory-native'
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { addMonths, subMonths, format  } from 'date-fns'
import { ptBR } from "date-fns/locale";
import { ActivityIndicator } from "react-native";



import { useTheme } from "styled-components";

import {
    Container,
    Header,
    Title,
    Content,
    PizzaGraphic,
    Months,
    Loading,
    ButtonMonth,
    Icon,
    MonthCurrent,
    MonthText,

} from './style';

import { useFocusEffect } from "@react-navigation/native";
import { categories } from "../../utils/categories";
import { RFValue } from "react-native-responsive-fontsize";

interface ItemProps {
    type: 'positive' | 'negative'
    name: string;
    amount: string;
    category: string;
    date: string;
};

interface TotalByCategory {
    key: string;
    name: string;
    color: string;
    total: number;
    totalFormated: string;
    percentage: string

}

export function Resume() {
    
    const theme = useTheme();
    
    const [totalByCategory, setTotalByCategory] = useState<TotalByCategory[]>();
    const [dataSelected, setDataSelected] = useState(new Date());
    const [isLoading, setIsLoading] = useState(true);
    
    async function loadDataExpensives() {
    
        setIsLoading(true);
    
        let totalExpensiveByCategory: TotalByCategory[] = [];
    
        const asyncName = '@gofinances:transactions';
    
        const response = await AsyncStorage.getItem(asyncName);
    
        const responseFormated = response ? JSON.parse(response) : [];
    
        const expensives = responseFormated.filter((item: ItemProps) => {
    
            const itemYear = new Date(item.date).getFullYear();
            const itemMonth = new Date(item.date).getMonth();
            const dataYear = new Date(dataSelected).getFullYear();
            const dataMonth = new Date(dataSelected).getMonth();
    
            return ( item.type === 'negative' &&
            itemYear === dataYear &&
            itemMonth === dataMonth)            
        });
    
        //console.log(expensives)
    
        const amountExpensives: [] = expensives.map((item : ItemProps) => {
            return item.amount
        });
    
        const amountTotal = amountExpensives.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        },0);
    
        categories.forEach(category => {
    
            let expensiveTotal = 0;
    
            expensives.forEach((exp: ItemProps) => {
    
                if (exp.category === category.key) {
                    expensiveTotal += Number(exp.amount);
                    
                }
    
            });
    
            const totalFormated = expensiveTotal.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            });
            const percentage = `${((expensiveTotal / amountTotal) * 100).toFixed(0)}%`
    
            if (expensiveTotal > 0) {
                totalExpensiveByCategory.push({
                    key: category.key,
                    name: category.name,
                    color: category.color,
                    total: expensiveTotal,
                    totalFormated,
                    percentage,
                });
            }
    
        });
    
        setTotalByCategory(totalExpensiveByCategory);
        setIsLoading(false);
    
    };

    function handleDataSelected(type: 'prev' | 'next'){

        if(type === 'next'){
            const nextDate =  addMonths(dataSelected, 1);
            setDataSelected(nextDate);
            
        }
        else{
            const prevDate= subMonths(dataSelected, 1);
            setDataSelected(prevDate);
        }
    }

    useFocusEffect(
        useCallback(() => {
            loadDataExpensives();
        }, [dataSelected])
    )

    return (
        <Container>
            <Header>
                <Title>Resumo</Title>
            </Header>

         <Months>
            <ButtonMonth onPress={() => handleDataSelected('prev')}>
           <Icon name='chevron-left' />
           </ButtonMonth>
            <MonthCurrent>
                <MonthText>{format(dataSelected, 'MMMM, yyyy', { locale: ptBR})}
                </MonthText>
            </MonthCurrent>
            <ButtonMonth onPress={() => handleDataSelected('next')}>
            <Icon name='chevron-right' />
            </ButtonMonth>
         </Months>

         {
            isLoading ? 
            <Loading>
                <ActivityIndicator
                 size={"large"}
                 color={theme.colors.secondary} />
            </Loading>

            :
            <Content 
            contentContainerStyle={{
                
                paddingBottom: useBottomTabBarHeight(),
                paddingHorizontal: 24,
                showsVerticalScrollIndicator:false, 

                }} >

                <PizzaGraphic>
                <VictoryPie
                    data={totalByCategory}
                    colorScale={totalByCategory?.map(item => item.color) }
                    labelRadius={70}
                    style={{
                    labels:{
                        fontSize: RFValue(18),
                        fontWeight: 'bold',
                        fill: theme.colors.shape
                    }
                    }}
                   
                    x='percentage'
                    y='total'
                />
                </PizzaGraphic>

                {
                    totalByCategory &&

                    totalByCategory?.map(item => (


                        <HistoryCard
                            key={item.key}
                            color={item.color}
                            title={item.name}
                            amount={item.totalFormated}
                        />

                    ))
                }
            </Content>
}
        </Container>
    )
}
