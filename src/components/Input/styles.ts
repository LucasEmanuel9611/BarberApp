import { Feather } from "@expo/vector-icons";
import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export type ContainerProps = {
  isFocused: boolean;
  isErrored: boolean;
};

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};

  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `}
`;

export const Icon = styled(Feather)`
  margin-right: 16px;
`;

export const CustomInput = styled(TextInput)`
  flex: 1%;
  color: #fff;
  font-size: 16px;
`;
