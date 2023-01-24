import React, {FC, useMemo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps, StackList} from '../../modules/navigations/types';
import {useAppSelector, useAppDispatch} from '../../modules/hooks/redux';
import {changeDirection} from '../../modules/redux/slices/tokenPairs';
import PairItem from '../PairItem';
import {
  Wrapper,
  TokensContainer,
  Button,
  ArrowBtn,
  BtnText,
  SameText,
} from './style';
import {tokensAreSame} from '../../utils/validatePairs';

const CurrensySection: FC = () => {
  const {navigate} = useNavigation<NavigationProps>();
  const {pairs, direction} = useAppSelector(state => state.tokenPairs);
  const dispatch = useAppDispatch();

  const handleNavigateChoose = (token: 'A' | 'B') => {
    navigate(StackList.ChoosePairs, {token});
  };

  const handleWatchExchange = () => {
    navigate(StackList.Exchange);
  };

  const handleChangeDirection = () => {
    dispatch(changeDirection(!direction));
  };

  const isValid = useMemo(() => pairs.A && pairs.B, [pairs.A, pairs.B]);

  const isSame = useMemo(
    () => pairs.A && pairs.B && tokensAreSame(pairs.A?.symbol, pairs.B?.symbol),
    [pairs.A, pairs.B],
  );

  return (
    <Wrapper>
      <TokensContainer>
        <Button onPress={() => handleNavigateChoose('A')}>
          {pairs.A ? <PairItem item={pairs.A} /> : <BtnText>Token A</BtnText>}
        </Button>
        <ArrowBtn onPress={handleChangeDirection}>
          {direction ? <BtnText>↓</BtnText> : <BtnText>↑</BtnText>}
        </ArrowBtn>
        <Button onPress={() => handleNavigateChoose('B')}>
          {pairs.B ? <PairItem item={pairs.B} /> : <BtnText>Token B</BtnText>}
        </Button>
      </TokensContainer>
      {isSame && (
        <Button onPress={() => handleNavigateChoose('A')}>
          <SameText>Tokens are the same! Change one of them</SameText>
        </Button>
      )}
      {isValid && !isSame && (
        <Button disabled={!isValid} onPress={handleWatchExchange}>
          <BtnText>Watch</BtnText>
        </Button>
      )}
    </Wrapper>
  );
};

export default CurrensySection;
