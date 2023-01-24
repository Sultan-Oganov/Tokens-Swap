import React, {FC} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CurrensySection from '../components/CurrensySection';
import {RootStackParamList, StackList} from '../modules/navigations/types';
import {Container, Title} from './style';

type ChooseCurrensyProps = StackScreenProps<
  RootStackParamList,
  StackList.ChooseCurrensy
>;

const ChooseCurrensy: FC<ChooseCurrensyProps> = () => {
  const insets = useSafeAreaInsets();

  return (
    <Container {...{insets}}>
      <Title>Choose Tokens</Title>
      <CurrensySection />
    </Container>
  );
};

export default ChooseCurrensy;
