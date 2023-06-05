import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px 150px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const DateButton = styled.TouchableOpacity`
  width: 50%;
  height: 60px;
  padding: 0 16px;
  background: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 10px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_500};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const DateButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const FormContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;
