import {Text, View} from 'react-native';
import React from 'react';

// import Icon from 'react-native-vector-icons/Ionicons';
import {HamburgerMenu} from '../../components/shared/HamburgerMenu';
import IonIcon from '../../components/shared/IonIcon';

export const Tab1Screen = () => {
  return (
    <View>
      <HamburgerMenu />
      <Text>Tab1Screen</Text>

      {/* <Icon name="rocket-outline" size={100} /> */}
      <IonIcon name="rocket-outline" size={100} />
    </View>
  );
};
