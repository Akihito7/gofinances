import React from "react";
import { Container, Error } from "./styles";
import { Control, Controller } from "react-hook-form";

import { Input } from "../Input";
import { TextInputProps } from "react-native";


interface Props extends TextInputProps {
    control: Control;
    name: string;
    error: string;
}

export function InputForm({

    control,
    name,
    error,
    ...rest
}: Props) {
    return (

        <Container>

            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        onChangeText={onChange}
                        {...rest}
                        value={value}
                    />
                )}
            />

            {error && <Error> {error} </Error>}
        </Container>
    )
}