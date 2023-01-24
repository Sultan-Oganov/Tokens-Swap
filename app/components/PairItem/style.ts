import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 10px;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 20px;
`;

export const TextView = styled.View`
  flex-direction: column;
`;

export const TokenSymbol = styled.Text`
  color: #fff;
  font-weight: 500;
`;

export const TokenName = styled.Text`
  color: #fff;
`;
