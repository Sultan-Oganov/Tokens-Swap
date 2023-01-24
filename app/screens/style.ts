import {Dimensions} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const ScreenWidth = Dimensions.get('screen').width;
export const ScreenHeight = Dimensions.get('screen').height;

export const Container = styled.ImageBackground`
  position: relative;
  flex: 1;
  background-color: #343759;
  padding-top: ${({insets}: {insets: EdgeInsets}) => insets.top}px;
  padding-bottom: ${({insets}: {insets: EdgeInsets}) => insets.bottom}px;
  padding-left: ${({insets}: {insets: EdgeInsets}) => insets.left}px;
  padding-right: ${({insets}: {insets: EdgeInsets}) => insets.right}px;
`;

export const Title = styled.Text`
  font-size: 30px;
  text-align: center;
  color: #fff;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: 25px;
  text-align: center;
  color: #fff;
  font-weight: bold;
`;

export const BackBtn = styled.TouchableOpacity`
  position: absolute;
  top: 60px;
  left: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const BtnText = styled.Text`
  color: #fff;
  font-size: 18px;
`;
