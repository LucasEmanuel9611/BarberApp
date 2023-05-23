import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonText, Container } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    children: string;
    isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, isLoading, ...rest }) => {
    return isLoading ?
        <Container>
            <ButtonText>Carregando...</ButtonText>
        </Container>
        :
        <Container {...rest}>
            <ButtonText>{children}</ButtonText>
        </Container>
};
export default Button;