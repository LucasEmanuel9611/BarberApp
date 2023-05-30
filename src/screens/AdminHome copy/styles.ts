import { SafeAreaView } from "react-native-safe-area-context";
import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled(SafeAreaView)<{ theme: DefaultTheme }>`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.ORANGE_100};
`;

export const UserContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 80px;
  margin-bottom: 50px;
`;

export const UserNameContainer = styled.View`
  justify-content: space-between;
  padding: 2px;
  height: 100%;
`;

export const UserName = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
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

export const Content = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  flex: 1;
  height: 100%;
  border-radius: 30px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 40px 10px 0;
  gap: 8px;
`;

export const InfoCard = styled.View`
  width: 100%;
  padding: 10px;
  background: ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 10px;
  flex-direction: row;
  height: 100px;
`;
