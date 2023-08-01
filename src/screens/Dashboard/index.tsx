import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from '@react-navigation/native';
import { ActivityIndicator, Text } from "react-native";

import theme from "../../global/styles/theme";

import {
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighLightCards,
    Transactions,
    Title,
    ListTransaction,
    Loading
} from "./style";

import { HighLightCard } from "../../components/HighlightCard";
import { TransactionCard, TransactionCardProps } from "../../components/TransactionCard";
import { useAuth } from "../../hooks/Auth";


export interface DataListProps extends TransactionCardProps {
    id: string;
}
interface User {
    id: string,
    email: string,
    name: string;
}


interface UserProps {
    user: User
};




export function Dashboard() {

    const { name } : UserProps['user'] = useAuth();

    const nameAsyncStorage = "@gofinances:transactions"

    const [lastTransactionsController, setlastTransactionsController] = useState('');
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [HighLightAmount, setHighLightAmount] = useState({
        entriesTotal: {
            amount: '0'
        },
        expensiveTotal: {
            amount: '0'
        },
        total: {
            amount: '0'
        }
    });

    const [lastTransactions, setLastTransactions] = useState({
        positive: '',
        negative: '',
        total: '',
    })

    let entriesTotal = 0;
    let expensiveTotal = 0;
    let allPositiveTransactions: number[] = [];
    let allNegativeTransactions: number[] = [];

    function getLastTransactions(collection: number[]) {


        const lastTransaction = Math.max(...collection);
        const dataFormated = `${new Date(lastTransaction).getDate()} de ${new Date(lastTransaction).toLocaleString('pt-BR', {
            month: 'long'
        })}`;
        return dataFormated;
    }

    async function saveLastTransactions() {

        const response = await AsyncStorage.getItem(nameAsyncStorage);

        const data = response ? JSON.parse(response) : [];

        data.forEach((item: DataListProps) => {


            if (item.type === 'positive') allPositiveTransactions.push(new Date(item.date).getTime());
            else allNegativeTransactions.push(new Date(item.date).getTime());

        });

        const positive = getLastTransactions(allPositiveTransactions);
        const negative = getLastTransactions(allNegativeTransactions);

        const resultPositive = positive === 'NaN de Invalid Date' ? 'Sem entradas' : positive;
        const resultNegative = negative === 'NaN de Invalid Date' ? 'Sem sáidas' : negative
        const resultTotal = negative === 'NaN de Invalid Date' ? 'Sem total' : negative

        setLastTransactions({
            positive: String(resultPositive),
            negative: String(resultNegative),
            total: String(resultTotal),
        });

    }


    async function getTransactions() {

        const response = await AsyncStorage.getItem(nameAsyncStorage);

        const data = response ? JSON.parse(response) : [];

        const dataFormated = data.map((item: DataListProps) => {

            if (item.type === 'positive') entriesTotal += Number(item.amount);
            else expensiveTotal += Number(item.amount);

            const amount = parseFloat(item.amount).toLocaleString('pt-Br', {
                style: 'currency',
                currency: 'BRL',
            });

            const date = Intl.DateTimeFormat('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: '2-digit'
            }).format(new Date(item.date));


            return (
                {

                    id: item.id,
                    name: item.name,
                    amount,
                    type: item.type,
                    date,
                    category: item.category,
                }
            )
        })

        setData(dataFormated);


        setHighLightAmount({
            entriesTotal: {
                amount: entriesTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            },
            expensiveTotal: {
                amount: expensiveTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            },

            total: {
                amount: (entriesTotal - expensiveTotal).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            }
        });

        expensiveTotal = 0;
        entriesTotal = 0;

        setIsLoading(false);

    }

    function clearAsyncStorage() {
        AsyncStorage.removeItem(nameAsyncStorage);

    }
    useEffect(() => {
        getTransactions();
        saveLastTransactions();


    }, []);

    useFocusEffect(
        React.useCallback(() => {
            getTransactions();
            saveLastTransactions();


        }, [])
    );



    return (
        <Container>
            {isLoading ? <Loading>
                <ActivityIndicator
                    color={theme.colors.secondary}
                    size={"large"}
                />
            </Loading> :
                <>
                    <Header >
                        <UserWrapper >
                            <UserInfo>
                                <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/121524719?v=4' }} />
                                <User>
                                    <UserGreeting>Olá</UserGreeting>
                                    <UserName>{name}</UserName>
                                </User>
                            </UserInfo>
                            <Icon name="power" />
                        </UserWrapper>
                    </Header>

                    <HighLightCards >
                        <HighLightCard
                            title="Entradas"
                            type="up"
                            amount={HighLightAmount.entriesTotal.amount}
                            lastTransaction={lastTransactions.positive}
                        />

                        <HighLightCard
                            title="Saídas"
                            type="down"
                            amount={HighLightAmount.expensiveTotal.amount}
                            lastTransaction={lastTransactions.negative}
                        />

                        <HighLightCard
                            title="Total"
                            type="total"
                            amount={HighLightAmount.total.amount}
                            lastTransaction={lastTransactions.total}
                        />

                    </HighLightCards>

                    <Transactions>

                        <Title>Listagem</Title>

                        <ListTransaction
                            data={data}
                            keyExtractor={(item: DataListProps) => item.id}
                            renderItem={({ item }: { item: DataListProps }) => {
                                return <TransactionCard data={item} />
                            }}
                        />

                    </Transactions>
                </>
            }
        </Container>
    )

}