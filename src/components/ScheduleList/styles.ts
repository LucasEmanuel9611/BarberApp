import styled from "styled-components/native";

export const CardArea = styled.View`
  align-items: center;
  height: 100%;
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
