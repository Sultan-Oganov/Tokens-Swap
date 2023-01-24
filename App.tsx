import React from 'react';
import RootStack from './app/modules/navigations/RootStack';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './app/modules/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <RootStack />
    </Provider>
  );
};

export default App;
