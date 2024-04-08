import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  AlertScreen,
  Animation101Screen,
  Animation102Screen,
  HomeScreen,
  SwitchScreen,
} from '../screens';
export type RootStackParams = {
  HomeScreen: undefined;
  Animation101Screen: undefined;
  Animation102Screen: undefined;
  PullToRefreshScreen: undefined;
  CustomSectionListScreen: undefined;
  ModalScreen: undefined;
  InfiniteScrollScreen: undefined;
  SlidesScreen: undefined;
  ChangeThemeScreen: undefined;
  SwitchScreen: undefined;
  AlertScreen: undefined;
  TextInputScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />

      {/* AnimationScreens */}
      <Stack.Group>
        <Stack.Screen
          name="Animation101Screen"
          component={Animation101Screen}
        />
        <Stack.Screen
          name="Animation102Screen"
          component={Animation102Screen}
        />
      </Stack.Group>
      {/* MenuScreens */}

      {/* UIScreens */}
      <Stack.Group>
        <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
        <Stack.Screen name="AlertScreen" component={AlertScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
