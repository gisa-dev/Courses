import {Text, Pressable, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {globalStyles} from '../../theme/theme';
import IonIcon from './IonIcon';

export const HamburgerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={styles.button}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <IonIcon name="apps-outline" />
        </Pressable>
      ),
    });
  }, []);

  return <></>;
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    // backgroundColor: 'cyan',
    alignSelf: 'flex-start',
  },
});
