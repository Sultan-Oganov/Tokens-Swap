import React, {FC} from 'react';
import {IToken} from '../../interfaces/IToken';
import {Wrapper, TokensList, ModalWrap, ModalView} from './style';
import TokenItem from '../TokenItem';

interface PairSectionProps {
  cryptos: IToken[];
  handleGoBack: () => void;
  handleChooseToken: (tokenData: IToken) => void;
}

const PairSection: FC<PairSectionProps> = ({
  cryptos,
  handleGoBack,
  handleChooseToken,
}) => {
  return (
    <Wrapper>
      <ModalWrap>
        <ModalView>
          <TokensList
            keyExtractor={(item: IToken) => item.address}
            renderItem={({item}: {item: IToken}) => (
              <TokenItem {...{item, handleGoBack, handleChooseToken}} />
            )}
            data={cryptos}
          />
        </ModalView>
      </ModalWrap>
    </Wrapper>
  );
};

export default PairSection;
