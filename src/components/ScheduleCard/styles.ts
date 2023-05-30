import styled from "styled-components/native";

export const CardContainer = styled.View`
  width: 100%;
  padding: 10px;
  background: ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 10px;
  flex-direction: row;
  height: 100px;
`;

export const StatusSideContainer = styled.View`
  flex: 1;
  justify-content: center;
  gap: 10px;
`;

export const DateContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`;

export const CardText = styled.Text`
  color: #fff;
  font-size: 16px;
`;
