import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SideMenuNavigator} from './presentation/routes/SideMenuNavigator';
import {BottomTabsNavigator} from './presentation/routes/BottomTabsNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <SideMenuNavigator />
      {/* <BottomTabsNavigator /> */}
    </NavigationContainer>
  );
};

export default App;
