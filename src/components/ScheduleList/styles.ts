import styled from "styled-components/native";

export const CardArea = styled.View`
  align-items: center;
  height: 100%;
  padding-top: 100px;
  gap: 8px;
`;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  /* padding-top: 100px; */
  flex: 1;
`;

export const TreatmentText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 18px;
`;
