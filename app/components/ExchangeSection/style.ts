import styled from 'styled-components/native';

export const Wrapper = styled.View`
  justify-content: center;
  flex: 1;
  position: relative;
  padding: 20px;
`;

export const Container = styled.View`
  height: 90%;
  align-items: center;
  background-color: #11073d;
  padding-: 20px;
  border-radius: 10px;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Header = styled.View`
  justify-content: center;
  gap: 10px;
  width: 100%;
`;

export const ImageView = styled.View`
  flex-direction: ${({direction}: {direction: boolean}) =>
    direction ? 'row' : 'row-reverse'};
  justify-content: center;
  gap: 30px;
`;

export const TitleView = styled.View`
  flex-direction: ${({direction}: {direction: boolean}) =>
    direction ? 'row' : 'row-reverse'};
  justify-content: center;
  padding-vertical: 20px;
  padding-horizontal: 50px;
  gap: 10px;
`;

export const Logo = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 20px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 25px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.1);
  width: 100%;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
`;

export const BtnText = styled.Text`
  color: #fff;
  font-size: 18px;
`;
