import React, {FC} from 'react';
import {IToken} from '../../interfaces/IToken';
import {
  CardTouchable,
  Container,
  Logo,
  TextView,
  TokenSymbol,
  TokenName,
} from './style';

interface TokenItemProps {
  item: IToken;
  handleGoBack?: () => void;
  handleChooseToken?: (tokenData: IToken) => void;
}

const TokenItem: FC<TokenItemProps> = ({
  item,
  handleGoBack,
  handleChooseToken,
}) => {
  const handlePress = () => {
    if (!handleChooseToken || !handleGoBack) {
      return;
    }
    handleChooseToken(item);
    handleGoBack();
  };

  return (
    <CardTouchable onPress={handlePress}>
      <Container>
        <Logo source={{uri: item.logoURI}} />
        <TextView>
          <TokenSymbol>{item.symbol}</TokenSymbol>
          <TokenName>{item.name}</TokenName>
        </TextView>
      </Container>
    </CardTouchable>
  );
};

export default TokenItem;
