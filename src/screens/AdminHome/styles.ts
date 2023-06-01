import { SafeAreaView } from "react-native-safe-area-context";
import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled(SafeAreaView)<{ theme: DefaultTheme }>`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.ORANGE_100};
`;

export const InfoCard = styled.View`
  width: 100%;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 10px;
  min-height: 100px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const CardTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 22px;
  font-weight: bold;
`;

export const TextInfo = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.ORANGE_100};
`;

export const CardSideContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
