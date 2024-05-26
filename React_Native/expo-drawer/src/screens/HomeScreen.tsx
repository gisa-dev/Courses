import { View, Text } from 'react-native';
import React from 'react';
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import { Button } from '~/components/Button';

const HomeScreen = () => {
  const navigation = useNavigation();
  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Button title="Toggle Drawer" onPress={onToggleDrawer} />
    </View>
  );
};

export default HomeScreen;
