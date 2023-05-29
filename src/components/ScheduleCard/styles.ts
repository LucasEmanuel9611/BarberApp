import styled from "styled-components/native";

export const Container = styled.View`
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
`;

export const DateContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`;

export const DateText = styled.Text`
  color: #fff;
  font-size: 14px;
`;
