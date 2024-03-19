import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import CalculatorScreen from './presentation/screens/CalculatorScreen';
import {globalStyles} from './config/theme/appTheme';

export const App = () => {
  return (
    <View style={globalStyles.background}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <CalculatorScreen />
    </View>
  );
};
