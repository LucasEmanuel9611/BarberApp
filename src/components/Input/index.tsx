import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import * as Styled from './styles';

type InputProps = TextInputProps & Styled.ContainerProps & {
    name: string;
    icon: string;
}

export function Input({ icon, name, isFocused = false, isErrored = false, ...rest }: InputProps) {
    const { COLORS } = useTheme();

    return (
        <Styled.Container isFocused={false} isErrored={false}>
            <Styled.Icon
                name={icon}
                size={20}
                color={isFocused ? COLORS.ORANGE_100 : COLORS.GRAY_300}
            />

            <Styled.CustomInput
                placeholderTextColor={COLORS.GRAY_300}
                {...rest}
            />
        </Styled.Container>
    )
}