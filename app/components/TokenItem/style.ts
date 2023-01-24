import styled from 'styled-components/native';

export const CardTouchable = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.2);
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 20px;
  width: 100%;
`;

export const Container = styled.View`
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 40px;
  height: 40px;
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
