import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { ButtonText, Container } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    children: string;
    isLoading?: boolean;
    color?: string;
}

const Button = ({ children, isLoading, color, ...rest }: ButtonProps) => {
    const { COLORS } = useTheme()
    const buttonColor = color ?? COLORS.ORANGE_100

    return isLoading ?
        <Container color={buttonColor}>
            <ButtonText>Carregando...</ButtonText>
        </Container>
        :
        <Container color={buttonColor} {...rest}>
            <ButtonText>{children}</ButtonText>
        </Container>
};
export default Button;