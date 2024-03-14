import {SafeAreaView} from 'react-native';
import React from 'react';
import {PaperProvider} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {
  BoxObjectModelScreen,
  DimensionScreen,
  FlexDirectionScreen,
  FlexScreen,
  HomeWorkScreen,
  PositionScreen,
} from './src/presentation/screens';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={{flex: 1}}>
        <HomeWorkScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
