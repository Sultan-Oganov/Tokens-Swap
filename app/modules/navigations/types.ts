import {StackNavigationProp} from '@react-navigation/stack';

export enum StackList {
  ChooseCurrensy = 'ChooseCurrensy',
  ChoosePairs = 'ChoosePairs',
  Exchange = 'Exchange',
}

export type RootStackParamList = {
  ChooseCurrensy: undefined;
  ChoosePairs: {token: 'A' | 'B'};
  Exchange: undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;
