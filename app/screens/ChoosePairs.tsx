import React, {FC, useMemo} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RootStackParamList, StackList} from '../modules/navigations/types';
import {Container, Title, Subtitle, BackBtn, BtnText} from './style';
import PairSection from '../components/PairSection';
import {useGetTokensQuery} from '../modules/redux/api/token.api';
import {useAppDispatch} from '../modules/hooks/redux';
import {chooseTokenPair} from '../modules/redux/slices/tokenPairs';
import {IToken} from '../interfaces/IToken';

type ChoosePairsProps = StackScreenProps<
  RootStackParamList,
  StackList.ChoosePairs
>;

const ChoosePairs: FC<ChoosePairsProps> = ({navigation, route}) => {
  const {data, isLoading} = useGetTokensQuery('');
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const {token} = route.params;

  const cryptos = useMemo(() => data?.data, [data]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleChooseToken = (tokenData: IToken) => {
    dispatch(chooseTokenPair({tokenName: token, token: tokenData}));
  };

  if (isLoading) {
    return <Title>...Loading</Title>;
  }

  return (
    <Container {...{insets}}>
      <Title>Choose Pairs</Title>
      <Subtitle>Token {token}</Subtitle>
      <BackBtn onPress={handleGoBack}>
        <BtnText>←</BtnText>
      </BackBtn>
      <PairSection {...{cryptos, handleGoBack, handleChooseToken}} />
    </Container>
  );
};

export default ChoosePairs;
