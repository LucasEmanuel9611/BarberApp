import styled from "styled-components/native";

export const CardArea = styled.View`
  flex: 1;
  gap: 8px;
`;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 80px;
`;

export const TreatmentText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 18px;
`;
