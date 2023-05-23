import { useState } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import * as Styled from './styles';

type InputProps = TextInputProps & {
    name: string;
    icon: string;
    isErrored: boolean;
}

export function Input({ icon, name, isErrored = false, ...rest }: InputProps) {
    const { COLORS } = useTheme();
    const [isFocused, setIsFocused] = useState(false);

    return (
        <Styled.Container isFocused={isFocused} isErrored={isErrored}>
            <Styled.Icon
                name={icon}
                size={20}
                color={isFocused ? COLORS.ORANGE_100 : COLORS.GRAY_300}
            />

            <Styled.CustomInput
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholderTextColor={COLORS.GRAY_300}
                {...rest}
            />
        </Styled.Container>
    )
}