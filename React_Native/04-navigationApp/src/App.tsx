import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SideMenuNavigator} from './presentation/routes/SideMenuNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <SideMenuNavigator />
    </NavigationContainer>
  );
};

export default App;
