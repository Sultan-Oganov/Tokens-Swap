import React, {FC} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList, StackList} from '../modules/navigations/types';
import {BackBtn, BtnText, Container, Subtitle, Title} from './style';
import ExchangeSection from '../components/ExchangeSection';

type ExchangeProps = StackScreenProps<RootStackParamList, StackList.Exchange>;

const Exchange: FC<ExchangeProps> = ({navigation}) => {
  const insets = useSafeAreaInsets();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container {...{insets}}>
      <Title>Exchange</Title>
      <Subtitle>Tokens </Subtitle>
      <BackBtn onPress={handleGoBack}>
        <BtnText>←</BtnText>
      </BackBtn>
      <ExchangeSection />
    </Container>
  );
};

export default Exchange;
