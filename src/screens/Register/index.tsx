import React, { useEffect, useState } from "react";
import { Alert, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";


import uuid from 'react-native-uuid';
import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransacationsButtons,
    TransacationContainerTypeButton,


} from "./style";

import { InputForm } from "../../components/Form/InputForm";
import { Button } from "../../components/Button";
import { TransactionTypeButton } from "../../components/TransactionTypeButton";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";
import { CategorySelect } from "../CategorySelect";
import { useAuth } from "../../hooks/Auth";

interface FormTypes {
    name: string;
    amount: string
}

const schema = yup.object().shape({
    name: yup.string()
        .required("Preencha o campo nome"),

    amount: yup.number()
        .positive("Somente números positivos")
        .typeError("Informe um valor númerico")
        .required('Preencha o campo Preço')
})

export function Register() {

    const { user } = useAuth()
    const navigation = useNavigation();

    const nameAsyncStorage = `@gofinances:transactions:userid${user.id}`;

    const [TransactionType, setTransacationType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
        icon: 'any',
    });

    const {
        handleSubmit,
        control,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema)
    });

    function handleTransactionTypeSelect(type: 'positive' | 'negative') {
        setTransacationType(type);
    };

    function handlerCategoryModalOpen() {
        setCategoryModalOpen(true);
    };

    function handlerCategoryModalClose() {
        setCategoryModalOpen(false);
    };

    async function handlerSubmitForm(form: FormTypes) {

        if (!TransactionType) return Alert.alert('Selecione uma transação');

        if (category.key === 'category') return Alert.alert('Seleciona uma categoria');

        const newTransactions = {
            id: String(uuid.v4()),
            name: form.name,
            amount: form.amount,
            type: TransactionType,
            category: category.key,
            date: new Date()
        };

        //console.log(newTransactions);

        try {

            const response = await AsyncStorage.getItem(nameAsyncStorage);

            const transactions = response ? JSON.parse(response) : []

            const updateTransactions = [
                ...transactions,
                newTransactions
            ]

            await AsyncStorage.setItem(nameAsyncStorage, JSON.stringify(updateTransactions));

            reset();
            setTransacationType('');
            setCategory({
                key: 'category',
                name: 'Categoria',
                icon: 'any',
            })

            navigation.navigate('Listagem');



        } catch (error) {
            console.log(error);
            Alert.alert("Não foi possivel efetuar o salvamento");
        }

    }

    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>

                <Header>
                    <Title>
                        Cadastro
                    </Title>
                </Header>

                <Form>
                    <Fields>
                        <InputForm
                            name='name'
                            control={control}
                            placeholder="Nome"
                            error={errors.name && errors.name.message}

                            autoCapitalize="sentences"


                        />

                        <InputForm
                            name='amount'
                            control={control}
                            placeholder="Preço"
                            error={errors.amount && errors.amount.message}

                            keyboardType="numeric"

                        />


                        <TransacationsButtons>

                            <TransacationContainerTypeButton>

                                <TransactionTypeButton
                                    title='Income'
                                    type='up'
                                    onPress={() => handleTransactionTypeSelect('positive')}
                                    isActived={TransactionType === 'positive'}
                                />

                            </TransacationContainerTypeButton>


                            <TransacationContainerTypeButton>

                                <TransactionTypeButton
                                    title='Outcome'
                                    type='down'
                                    onPress={() => handleTransactionTypeSelect('negative')}
                                    isActived={TransactionType === 'negative'}
                                />

                            </TransacationContainerTypeButton>

                        </TransacationsButtons>

                        <CategorySelectButton
                            onPress={handlerCategoryModalOpen}
                            category={category}

                        />

                    </Fields>

                    <Button activeOpacity={.7}
                        title="Enviar"
                        onPress={handleSubmit(handlerSubmitForm)}
                    />

                </Form>

                <Modal visible={categoryModalOpen}>
                    <CategorySelect
                        category={category}
                        setCategory={setCategory}
                        closeSelectCategory={handlerCategoryModalClose}
                    />
                </Modal>

            </Container>
        </TouchableWithoutFeedback>
    )
}