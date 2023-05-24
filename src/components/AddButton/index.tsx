import { Feather } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components";
import * as Styled from "./styles";

export const AddButton = (rest: TouchableOpacityProps) => {
    const { COLORS } = useTheme();
    return (
        <Styled.CustomButton {...rest}>
            <Feather name="plus" size={50} color={COLORS.WHITE} />
        </Styled.CustomButton>
    );
};