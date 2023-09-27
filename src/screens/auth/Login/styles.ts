import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  gap: 8px;
  justify-content: center;
  padding: 0 30px 150px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-bottom: 24px;
  width: 100%;
  text-align: center;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
  width: 100%;
`;

export const ForgotPasswordText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 16px;
  width: 100%;
  text-align: center;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  padding: 16px 0 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: #ff9000;
  font-size: 18px;
  margin-left: 16px;
`;

export const ButtonContainer = styled.View`
  padding-bottom: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`
