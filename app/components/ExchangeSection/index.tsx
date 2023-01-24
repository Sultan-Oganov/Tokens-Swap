import React, {FC, useMemo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps, StackList} from '../../modules/navigations/types';
import {useAppSelector} from '../../modules/hooks/redux';
import {
  Wrapper,
  Container,
  Header,
  ImageView,
  TitleView,
  Logo,
  Title,
  Button,
  BtnText,
} from './style';
import {useGetTokensQuery} from '../../modules/redux/api/token.api';

const ExchangeSection: FC = () => {
  const {data} = useGetTokensQuery('');
  const {pairs, direction} = useAppSelector(state => state.tokenPairs);
  const {navigate} = useNavigation<NavigationProps>();
  const updatedDate = useMemo(() => data?.updatedDate, [data]);

  const handleChangePairs = () => {
    navigate(StackList.ChooseCurrensy);
  };

  return (
    <Wrapper>
      <Container>
        <Header>
          <ImageView {...{direction}}>
            <Logo source={{uri: pairs.A?.logoURI}} />
            <Logo source={{uri: pairs.B?.logoURI}} />
          </ImageView>
          <TitleView {...{direction}}>
            <Title>{pairs.A?.symbol}</Title>
            <Title>/</Title>
            <Title>{pairs.B?.symbol}</Title>
          </TitleView>
        </Header>
        <Title>Date: {updatedDate}</Title>
      </Container>
      <Button onPress={handleChangePairs}>
        <BtnText>Change pairs</BtnText>
      </Button>
    </Wrapper>
  );
};

export default ExchangeSection;
