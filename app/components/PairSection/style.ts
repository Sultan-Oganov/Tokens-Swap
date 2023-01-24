import {FlatList} from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  justify-content: center;
  flex: 1;
  position: relative;
  padding: 20px;
`;

export const TokensList = styled.FlatList`
  width: 100%;
  flex: 1;
` as unknown as typeof FlatList;

export const ModalWrap = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  justify-content: center;
  align-items: center;
`;
export const ModalView = styled.View`
  height: 90%;
  width: 90%;
  background-color: #11073d;
  border-radius: 20px;
  padding-vertical: 15px;
  padding-horizontal: 25px;
  shadow-color: #000,
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
`;
