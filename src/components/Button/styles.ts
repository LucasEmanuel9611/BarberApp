import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

type ContainerTouchableProps = {
  color: string;
};

export const Container = styled(TouchableOpacity)<ContainerTouchableProps>`
  width: 100%;
  height: 60px;
  background: ${({ color }) => color};
  border-radius: 10px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  font-size: 18px;
  width: 100%;
  text-align: center;
`;
