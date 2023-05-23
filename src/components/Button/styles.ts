import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.COLORS.ORANGE_100};
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
