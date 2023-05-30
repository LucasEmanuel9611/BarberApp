import { SafeAreaView } from "react-native-safe-area-context";
import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled(SafeAreaView)<{ theme: DefaultTheme }>`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  padding: 8px;
`;

export const UserContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0px 16px;
  margin-top: 10px;
  margin-bottom: 100px;
`;

export const UserNameContainer = styled.View`
  justify-content: space-between;
  padding: 2px;
  height: 100%;
`;

export const UserName = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.ORANGE_100};
  width: 100%;
`;

export const WelcomeText = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const UserAvatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 9999px;
`;
