import styled from 'styled-components/native';

export const Wrapper = styled.View`
  justify-content: center;
  flex: 1;
  position: relative;
  padding: 20px;
`;
export const TokensContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  background-color: #11073d;
  padding-: 20px;
  border-radius: 10px;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.1);
  width: 100%;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
`;

export const ArrowBtn = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const BtnText = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export const SameText = styled.Text`
  color: #fff;
  font-size: 16px;
`;
