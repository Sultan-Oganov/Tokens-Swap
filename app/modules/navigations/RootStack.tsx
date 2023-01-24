import React, {FC} from 'react';
// React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList, StackList} from './types';
// Screens
import ChooseCurrensy from '../../screens/ChooseCurrensy';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ChoosePairs from '../../screens/ChoosePairs';
import Exchange from '../../screens/Exchange';

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={StackList.ChooseCurrensy}>
          <Stack.Screen
            name={StackList.ChooseCurrensy}
            component={ChooseCurrensy}
            options={{
              transitionSpec: {
                open: {animation: 'timing', config: {duration: 400}},
                close: {animation: 'timing', config: {duration: 400}},
              },
            }}
          />
          <Stack.Screen
            name={StackList.ChoosePairs}
            component={ChoosePairs}
            options={{
              transitionSpec: {
                open: {animation: 'timing', config: {duration: 400}},
                close: {animation: 'timing', config: {duration: 400}},
              },
            }}
          />
          <Stack.Screen
            name={StackList.Exchange}
            component={Exchange}
            options={{
              transitionSpec: {
                open: {animation: 'timing', config: {duration: 400}},
                close: {animation: 'timing', config: {duration: 400}},
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootStack;
