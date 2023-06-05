import styled from "styled-components/native";

export const InfoCard = styled.TouchableOpacity`
  width: 100%;
  padding: 25px;
  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
  border-radius: 10px;
  min-height: 80px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const CardTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 18px;
  font-weight: bold;
`;

export const CardSideContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
