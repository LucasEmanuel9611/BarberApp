import styled from "styled-components/native";

export const UserContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 80px;
  margin-bottom: 20px;
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

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.COLORS.ORANGE_100};
  flex: 1;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  flex: 1;
  height: 100%;
  border-radius: 30px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 25px 10px 0px;
  gap: 8px;
`;
