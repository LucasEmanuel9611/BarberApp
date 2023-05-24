import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const CustomButton = styled(TouchableOpacity)`
  padding: 5px;
  background: ${({ theme }) => theme.COLORS.GREEN};
  border-radius: 999px;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 25px;
  right: 25px;
`;
