import {SafeAreaView} from 'react-native';
import React from 'react';
// import {HelloWorldScreen} from './src/presentation/screens/HelloWorldScreen';
import {CounterScreen} from './src/presentation/screens/CounterScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HelloWorldScreen name="Gilbert Acosta" /> */}
      <CounterScreen />
    </SafeAreaView>
  );
};
