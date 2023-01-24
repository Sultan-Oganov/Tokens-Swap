import React, {FC} from 'react';
import {IToken} from '../../interfaces/IToken';
import {Container, Logo, TextView, TokenSymbol, TokenName} from './style';

interface PairItemProps {
  item: IToken;
}

const PairItem: FC<PairItemProps> = ({item}) => {
  return (
    <Container>
      <Logo source={{uri: item.logoURI}} />
      <TextView>
        <TokenSymbol>{item.symbol}</TokenSymbol>
        <TokenName>{item.name}</TokenName>
      </TextView>
    </Container>
  );
};

export default PairItem;
